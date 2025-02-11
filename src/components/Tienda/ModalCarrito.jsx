import React, { useContext } from "react";
import { Context } from "../../context/Context"; // Importa el contexto
import "../../styles/Tienda/ModalCarrito.css";
import "../../styles/Tienda/Notificacion.css";
import Button from "../Button";
import '../../styles/button.css'

const ModalCarrito = ({ isOpen, closeModal }) => {
    const { cart, setCart } = useContext(Context); // Accedemos al carrito desde el contexto

    if (!isOpen) return null; // Si el modal no está abierto, no mostrar nada

    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (productoId) => {
        setCart(cart.filter((producto) => producto.id !== productoId));
    };

    // Función para modificar la cantidad de un producto (sin permitir duplicados)
    const modificarCantidad = (productoId, cantidad) => {
        setCart(prevCart =>
            prevCart.map(producto =>
                producto.id === productoId
                    ? { ...producto, cantidad: Math.max(1, (producto.cantidad || 1) + cantidad) } // Evita valores negativos y NaN
                    : producto
            )
        );
    };



    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>CARRITO DE COMPRAS</h2>
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <ul>
                        {cart.map((producto) => (
                            <li key={producto.id} className="cart-item">
                                <div className="cart-item-details">
                                    <h3>{producto.nombre}</h3>
                                    <div className="cart-item-image">
                                        <img src={producto.imagen} alt={producto.nombre} />
                                    </div>
                                    <p>Total: ${(parseFloat(producto.precio || 0) * (producto.cantidad || 1)).toFixed(2)}</p> {/* Calcula el total */}
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => modificarCantidad(producto.id, -1)}>-</button>
                                    <span>{producto.cantidad || 1}</span>
                                    <button onClick={() => modificarCantidad(producto.id, 1)}>+</button>
                                    <Button variant="eliminar" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="modal-footer">
                    <Button variant="editar" onClick={closeModal}>Seguir comprando</Button>
                    <Button variant="eliminar" onClick={() => alert("Ir a comprar ahora")}>Comprar ahora</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalCarrito;
