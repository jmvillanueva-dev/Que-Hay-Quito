import React from "react";
import "./../styles/newsletter.css";

import newsletterIcon from "../assets/icons/newsletterIcon.svg";

const Newsletter = () => {
    return (
        <section id="destinos" className="newsletter-section">
        <div className="newsletter-container">
            <img
            src={newsletterIcon}
            alt="Newsletter Icon"
            className="newsletter-icon"
            />
            <h2>Suscríbete hoy para no perderte ninguna publicación</h2>
            <form className="newsletter-form">
            <input
                type="email"
                placeholder="queHayQuito@email.com"
                className="newsletter-input"
                required
            />
            <button type="submit" className="newsletter-button">
                ¡Unirme ahora!
            </button>
            </form>
            <p className="newsletter-text">
            Suscríbete a nuestra newsletter y recibe promociones. Revisa las{" "}
            <a href="/privacy-policy" className="newsletter-link">
                Políticas de Privacidad
            </a>
            </p>
        </div>
        </section>
    );
};

export default Newsletter;
