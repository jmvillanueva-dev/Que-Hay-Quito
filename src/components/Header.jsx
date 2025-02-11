import React from "react";
import { Link } from 'react-router-dom';
import "./../styles/header.css";
import Button from "./Button";

// import icons
import {FaMapLocationDot} from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FiSearch } from "react-icons/fi";


import userIcon from "../assets/icons/userIcon.svg";
import logo from "../assets/icons/logo/logo.svg";

const Header = () => {
    return (
    <header className="header">
        <div className="header-container">
        <div className="logo">
            <img src={logo} alt="Qué Hay Quito" />
        </div>
        <nav className="nav-menu">
            <ul>
            <li>
                <a href="/Que-Hay-Quito">
                    <FaMapLocationDot size="1.5em" color="#0057d9" className="nav-icons" />
                    <div className="nav-text"> 
                        <span >Destinos</span>  
                    </div>
                </a>
            </li>
            <li>
                <a href="/Que-Hay-Quito/blog2">
                <IoMdStar size="1.5em" color="#0057d9" className="nav-icons" />
                    <div className="nav-text">Sugerencias</div>
                </a>
            </li>
            <li>
                <a href="/Que-Hay-Quito/blog">
                    <FaBlogger size="1.5em" color="#0057d9" className="nav-icons" />
                    <div className="nav-text">Blog</div>
                </a>
            </li>
            <li>
                <a href="/Que-Hay-Quito/tienda">
                    <MdLocalGroceryStore size="1.5em" color="#0057d9" className="nav-icons" />
                    <div className="nav-text">Tienda</div>
                </a>
            </li>
            <li>
                <a href="/Que-Hay-Quito">
                    <MdPermContactCalendar size="1.5em" color="#0057d9" className="nav-icons" />
                    <div className="nav-text">Contáctanos</div>
                </a>
            </li>
            </ul>
        </nav>
        <div className="search-login">
            <FiSearch color="#0057d9" />
            <input type="text" placeholder="Encuentra lo que buscas..." />
            <Button variant="white">Buscar</Button>
            <Link to='/Que-Hay-Quito/login'>
                <Button variant="blue">
                    <div className="login-button">
                        <img src={userIcon} alt="icon search" />
                        <span className="nav-text">Iniciar Sesión</span>
                    </div>
                </Button>
            </Link>
        </div>
        </div>
    </header>
    );
};

export default Header;