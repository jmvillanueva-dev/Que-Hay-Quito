import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import "../../styles/header.css"
import "../../styles/Tienda/Informacion.css"
import Button from "../Button";
import { Context } from "../../context/Context"; // Importamos el contexto para acceder al carrito

import iconLogo from "../../assets/icons/logo/iconQQ.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import logo from "../../assets/icons/logo/logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import shopping from "../../assets/store-items/carrito.png"
import ModalCarrito from "../../components/Tienda/ModalCarrito"; // Importamos el modal

const HeaderTienda = () => {
    const { cart } = useContext(Context); // Accedemos al carrito desde el contexto
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={iconLogo} alt="Qué Hay Quito" />
                    <img src={logo} alt="Qué Hay Quito" />
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/Que-Hay-Quito"><div>Destinos</div></Link></li>
                        <li><Link to="/Que-Hay-Quito/blog2"><div>Sugerencias</div></Link></li>
                        <li><Link to="/Que-Hay-Quito/blog"><div>Blog</div></Link></li>
                        <li><Link to="/Que-Hay-Quito/tienda"><div>Tienda</div></Link></li>
                        <li><Link to="/Que-Hay-Quito"><div>Contáctanos</div></Link></li>
                    </ul>
                </nav>
                <div className="search-login">
                    <img src={searchIcon} alt="icon search" />
                    <input type="text" placeholder="Encuentra lo que buscas..." />
                    <Button variant="white">Buscar</Button>
                    <Button variant="blue" onClick={openModal}>
                        <div className="shopping-button">
                            <img src={shopping} alt="Carrito" />
                            {cart.length > 0 && <span className="cart-count">{cart.length}</span>} {/* Muestra la cantidad de productos */}
                        </div>
                    </Button>
                    <Link to='/Que-Hay-Quito/login'>
                        <Button variant="blue">
                            <div className="login-buttonTienda">
                                <img src={userIcon} alt="icon search" />
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mostrar el modal cuando el estado es true */}
            <ModalCarrito isOpen={isModalOpen} closeModal={closeModal} />
        </header>
    );
};

export default HeaderTienda;
