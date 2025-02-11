import React, { useState, useEffect, useContext } from "react";
import { db, collection, getDocs } from "../../sevices/firebase";
import Button from "../Button";
import "../../styles/button.css";
import "../../styles/Tienda/Productos.css";
import { Context } from "../../context/Context"; // Asegúrate de que este import sea correcto

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [visible, setVisible] = useState(3);
    const [loading, setLoading] = useState(true); // Estado para mostrar carga
    const { cart, setCart } = useContext(Context); // Acceso al contexto para carrito
    const [notification, setNotification] = useState(""); // Estado para la notificación

    // Función para obtener productos desde Firebase Firestore
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "libros"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Productos obtenidos:", productosData); // Verifica los datos en consola
                setProductos(productosData);
            } catch (error) {
                console.error("Error obteniendo productos:", error);
            } finally {
                setLoading(false); // Quita la carga cuando termina
            }
        };

        fetchProductos();
    }, []);

    // Función para cargar más productos
    const handleLoadMore = () => {
        setVisible((prevVisible) => prevVisible + 3); // Cargar más productos
    };

    const agregarAlCarrito = (producto) => {
        setCart((prevCart) => {
            const productoExistente = prevCart.find(item => item.id === producto.id);
            if (productoExistente) {
                return prevCart.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 } // Aumenta la cantidad
                        : item
                );
            }
            return [...prevCart, { ...producto, cantidad: 1 }]; // Agrega si no existe
        });
        setNotification(`${producto.nombre} agregado al carrito`);
        setTimeout(() => {
            setNotification("");
        }, 2000);
    };

    return (
        <>
            <div className="container-card">
                {loading ? (
                    <p>Cargando productos...</p>
                ) : productos.length === 0 ? (
                    <p>No hay productos disponibles.</p>
                ) : (
                    productos.slice(0, visible).map((producto) => (
                        <div className="cards" key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <p>{producto.descripcion}</p>
                            <h4>PRECIO</h4>
                            <h4>${producto.precio}</h4>
                            <Button variant="shop" onClick={() => agregarAlCarrito(producto)}>
                                COMPRAR
                            </Button>
                        </div>
                    ))
                )}
            </div>
            {visible < productos.length && (
                <Button onClick={handleLoadMore} variant="editar">
                    Cargar Más
                </Button>
            )}

            {/* Mostrar notificación */}
            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}
        </>
    );
};

export default Productos;
