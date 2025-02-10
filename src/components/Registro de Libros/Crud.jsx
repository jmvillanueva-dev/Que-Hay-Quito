import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "../../sevices/firebase";
import Button from '../../components/Button';
import '../../styles/crud.css';
import '../../styles/button.css';


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
    const querySnapshot = await getDocs(collection(db, "libros"));
    const librosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLibros(librosData);
};

const agregarLibro = async () => {
    await addDoc(collection(db, "libros"), { ...libroActual });
    setModal(false);
    obtenerLibros();
};

const actualizarLibro = async () => {
    const libroRef = doc(db, "libros", idLibro);
    await updateDoc(libroRef, libroActual);
    setModalEdit(false);
    obtenerLibros();
};

const eliminarLibro = async (id) => {
    await deleteDoc(doc(db, "libros", id));
    obtenerLibros();
};

return (
    <div className="container">
    <Button variant="agregarblue"  onClick={() => setModal(true)}>Agregar Libro</Button>
    <div className="grid">
        {libros.map((libro) => (
        <div className="card" key={libro.id}>
            <h3>{libro.nombre}</h3>
            <img className="image" src={libro.imagen} alt={libro.nombre} />
            <p>Precio: ${libro.precio}</p>
            <p>Descripción: {libro.descripcion}</p>
            <Button variant="editar" onClick={() => { setIdLibro(libro.id); setLibroActual(libro); setModalEdit(true); }}>Editar</Button>
            <Button variant="eliminar" onClick={() => eliminarLibro(libro.id)}>Eliminar</Button>
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
            <input type="text" placeholder="Descripción" maxLength="40" value={libroActual.descripcion} onChange={(e) => setLibroActual({ ...libroActual, descripcion: e.target.value })} />
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
            <input type="text" placeholder="Descripción" maxLength="40" value={libroActual.descripcion} onChange={(e) => setLibroActual({ ...libroActual, descripcion: e.target.value })} />
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