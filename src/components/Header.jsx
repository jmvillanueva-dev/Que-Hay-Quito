import React from "react";
import "./../styles/header.css";
import logo from "../assets/logo.svg"; // Asegúrate de agregar el logo SVG en /assets

const Header = () => {
return (
<header className="header">
    <div className="header-container">
    <div className="logo">
        <img src={logo} alt="Qué Hay Quito" />
    </div>
    <nav className="nav-menu">
        <ul>
        <li><a href="#destinos">Destinos</a></li>
        <li><a href="#sugerencias">Sugerencias</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#tienda">Tienda</a></li>
        <li><a href="#contactanos">Contáctanos</a></li>
        </ul>
    </nav>
    <div className="search-login">
        <input type="text" placeholder="Encuentra lo que buscas..." />
        <button>Buscar</button>
        <button className="login-btn">Iniciar sesión</button>
    </div>
    </div>
</header>
);
};

export default Header;
