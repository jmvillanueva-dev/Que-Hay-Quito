import React from "react";
import "./../styles/header.css";

import iconLogo from "../../public/iconQQ.svg"
import logo from "../assets/logo.svg";
import searchIcon from "../assets/icons/search.svg";

const Header = () => {
return (
<header className="header">
    <div className="header-container">
    <div className="logo">
        <img src={iconLogo} alt="Qué Hay Quito" />
        <img src={logo} alt="Qué Hay Quito" />
    </div>
    <nav className="nav-menu">
        <ul>
        <li><a href="#destinos"><div>Destinos</div></a></li>
        <li><a href="#sugerencias"><div>Sugerencias</div></a></li>
        <li><a href="#blog"><div>Blog</div></a></li>
        <li><a href="#tienda"><div>Tienda</div></a></li>
        <li><a href="#contactanos"><div>Contáctanos</div></a></li>
        </ul>
    </nav>
    <div className="search-login">
        <img src={searchIcon} alt="icon search" />
        <input type="text" placeholder="Encuentra lo que buscas..." />
        <button>Buscar</button>
        <button className="login-btn">Iniciar sesión</button>
    </div>
    </div>
</header>
);
};

export default Header;
