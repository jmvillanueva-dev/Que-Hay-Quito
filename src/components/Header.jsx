import React from "react";
import { Link } from 'react-router-dom';
import "./../styles/header.css";
import Button from "./Button";

import iconLogo from "../../public/iconQQ.svg";
import userIcon from "../assets/icons/userIcon.svg";
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
            <Button variant="white">Buscar</Button>
            <Link to='/Que-Hay-Quito/login'>
                <Button variant="blue">
                    <div className="login-button">
                        <img src={userIcon} alt="icon search" />
                        <span>Iniciar Sesión</span>
                    </div>
                </Button>
            </Link>
        </div>
        </div>
    </header>
    );
};

export default Header;