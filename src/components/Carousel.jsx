import React, { useState } from "react";
import "./../styles/carousel.css";
import readIcon from "../assets/icons/readIcon.svg";

import img1ForHero from "../assets/img/sanfrancisco.png";
import img2ForHero from "../assets/img/centro-historico.png";
import img3ForHero from "../assets/img/chocoandino.png";

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const images = [
        { src: img1ForHero, title: "La majestuosa Inglesia San Francisco de Quito", desc: "Esta iglesia es un tesoro arquitectónico y espiritual que se eleva en el corazón de la ciudad, un capolavoro del barroco sudamericano que deja a todos con la boca abierta. Construida en el siglo XVII." },
        { src: img2ForHero, title: "El encanto del Centro Histórico de Quito", desc: "El Centro Histórico de Quito es un tesoro cultural y arquitectónico que cuenta con la distinción de ser Patrimonio de la Humanidad por la UNESCO. Este área es un reflejo de la rica historia y tradición de la ciudad, con edificios coloniales y barrocos que datan de los siglos XVII y XVIII." },
        { src: img3ForHero, title: "Descubre el encanto del Chocó Andino", desc: "Un oasis natural que ha capturado la atención del mundo. Este paraje único, declarado Reserva de Biósfera, es un refugio para la biodiversidad y una fuente de inspiración para aquellos que buscan conectar con la naturaleza." },
    ];

    const handlePrev = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    const handleNext = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    return (
    <section className="carousel"> 
        {images.map((image, index) => (
            <div    
                key={index}
                className={`carousel-item ${index === current ? "active" : ""}`}
            >
                <img src={image.src} alt={image.title} className="carousel-image" />
                <div className="carousel-caption">
                    <h3>{image.title}</h3>
                    <p>{image.desc}</p>
                    <a href="">
                        <img src={readIcon} alt="" />
                        <span>Leer artículo...</span>
                    </a>
                </div>
            </div>
        ))}

        {/* Controles */}
        <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
        </button>
        <button className="carousel-control next" onClick={handleNext}>
        &#10095;
        </button>
    </section>
    );
};

export default Carousel;

