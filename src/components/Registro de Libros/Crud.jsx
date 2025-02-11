import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "../../sevices/firebase";
import Button from "../../components/Button";
import "../../styles/crud.css";
import "../../styles/button.css";

const CRUDLibros = () => {
const [libros, setLibros] = useState([]);
const [modal, setModal] = useState(false);
const [modalEdit, setModalEdit] = useState(false);
const [libroActual, setLibroActual] = useState({ nombre: "", imagen: "", precio: "", descripcion: "" });
const [idLibro, setIdLibro] = useState(null);

useEffect(() => {
    obtenerLibros();
}, []);

const obtenerLibros = async () => {
try {
        const querySnapshot = await getDocs(collection(db, "libros"));
        const librosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLibros(librosData);
    } catch (error) {
        console.error("Error al obtener libros:", error);
}
};

const validarCampos = () => {
    if (!libroActual.nombre.trim() || !libroActual.imagen.trim() || !libroActual.precio || !libroActual.descripcion.trim()) {
        alert("Todos los campos son obligatorios");
        return false;
    }
    return true;
};

const agregarLibro = async () => {
    if (!validarCampos()) return;
    try {
        const querySnapshot = await getDocs(collection(db, "libros"));
        const librosExistentes = querySnapshot.docs.map((doc) => doc.data());

        // Verifica si ya existe un libro con el mismo nombre
        const libroDuplicado = librosExistentes.some(libro => libro.nombre.toLowerCase() === libroActual.nombre.toLowerCase());
        if (libroDuplicado) {
            alert("Este libro ya existe en la base de datos.");
            return;
        }

        await addDoc(collection(db, "libros"), { ...libroActual });
        setModal(false);
        limpiarCampos();
        obtenerLibros();
    } catch (error) {
        console.error("Error al agregar libro:", error);
    }
};

const actualizarLibro = async () => {
    if (!validarCampos()) return;
    try {
        const libroRef = doc(db, "libros", idLibro);
        await updateDoc(libroRef, libroActual);
        setModalEdit(false);
        obtenerLibros();
    } catch (error) {
        console.error("Error al actualizar libro:", error);
    }
};

const eliminarLibro = async (id) => {
    try {
        await deleteDoc(doc(db, "libros", id));
        obtenerLibros();
    } catch (error) {
        console.error("Error al eliminar libro:", error);
    }
};

const limpiarCampos = () => {
    setLibroActual({ nombre: "", imagen: "", precio: "", descripcion: "" });
};

return (
<div className="container">
    <Button variant="agregarblue" onClick={() => { limpiarCampos(); setModal(true); }}>
    Agregar Libro
    </Button>
    <div className="grid">
    {libros.map((libro) => (
        <div className="card" key={libro.id}>
        <h3>{libro.nombre}</h3>
        <img className="image" src={libro.imagen || "/placeholder.svg"} alt={libro.nombre} />
        <p>Precio:</p>
        <h3> ${libro.precio} </h3>
        <p>Descripción:</p>
        <h5> {libro.descripcion}</h5>
        <Button variant="editar" onClick={() => { setIdLibro(libro.id); setLibroActual(libro); setModalEdit(true); }}>
            Editar
        </Button>
        <Button variant="eliminar" onClick={() => eliminarLibro(libro.id)}>
            Eliminar
        </Button>
        </div>
    ))}
    </div>

    {modal && (
    <div className="modal">
        <div className="modal-content">
        <h2>Agregar Libro</h2>
        <input type="text" placeholder="Nombre" value={libroActual.nombre} onChange={(e) => setLibroActual({ ...libroActual, nombre: e.target.value })} />
        <input type="text" placeholder="Imagen URL" value={libroActual.imagen} onChange={(e) => setLibroActual({ ...libroActual, imagen: e.target.value })} />
        <input type="number" placeholder="Precio" value={libroActual.precio} onChange={(e) => setLibroActual({ ...libroActual, precio: e.target.value })} />
        <input type="text" placeholder="Descripción" maxLength="1000" value={libroActual.descripcion} onChange={(e) => setLibroActual({ ...libroActual, descripcion: e.target.value })} />
        <div className="content-btn">
            <Button variant="editar" onClick={agregarLibro}>Guardar</Button>
            <Button variant="eliminar" onClick={() => setModal(false)}>Cerrar</Button>
        </div>
        </div>
    </div>
    )}

    {modalEdit && (
    <div className="modal">
        <div className="modal-content">
        <h2>Editar Libro</h2>
        <input type="text" placeholder="Nombre" value={libroActual.nombre} onChange={(e) => setLibroActual({ ...libroActual, nombre: e.target.value })} />
        <input type="text" placeholder="Imagen URL" value={libroActual.imagen} onChange={(e) => setLibroActual({ ...libroActual, imagen: e.target.value })} />
        <input type="number" placeholder="Precio" value={libroActual.precio} onChange={(e) => setLibroActual({ ...libroActual, precio: e.target.value })} />
        <input type="text" placeholder="Descripción" maxLength="10000" value={libroActual.descripcion} onChange={(e) => setLibroActual({ ...libroActual, descripcion: e.target.value })} />
        <div className="content-btn">
            <Button variant="editar" onClick={actualizarLibro}>Actualizar</Button>
            <Button variant="eliminar" onClick={() => setModalEdit(false)}>Cerrar</Button>
        </div>
        </div>
    </div>
    )}
</div>
);
};

export default CRUDLibros;
