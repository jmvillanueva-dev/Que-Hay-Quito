import React from "react";
import "./../styles/footer.css";

const Footer = () => {
return (
<footer className="footer">
    <div className="footer-container">
    <div className="footer-section">
        <h3 className="footer-title">Sobre Nosotros</h3>
        <p className="footer-description">
        Somos una plataforma dedicada a ayudarte a explorar los mejores destinos turísticos con información precisa y recomendaciones personalizadas.
        </p>
    </div>

    <div className="footer-section">
        <h3 className="footer-title">Enlaces Rápidos</h3>
        <ul className="footer-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#destinations">Destinos</a></li>
        <li><a href="#contact">Contáctanos</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h3 className="footer-title">Síguenos</h3>
        <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-linkedin-in"></i>
        </a>
        </div>
    </div>
    </div>
    
    <div className="footer-copyright">
    <p>© Copyright {new Date().getFullYear()} | QuéHayQuito Company S.A | Todos los derechos reservados.</p>
    </div>
</footer>
);
};

export default Footer;
