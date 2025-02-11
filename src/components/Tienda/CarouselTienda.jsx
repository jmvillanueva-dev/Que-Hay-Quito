import React, { useState } from "react";
import "../../styles/carousel.css";
import readIcon from "../../assets/icons/readIcon.svg";

import img1ForHero from "../../assets/img/img2.avif";
import img2ForHero from "../../assets/img/img1.jpg";
import img3ForHero from "../../assets/img/img3.avif";

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const images = [
        { src: img1ForHero, title: "La mejor biblioteca en linea" },
        { src: img2ForHero, title: "El encanto del Centro Histórico de Quito"},
        { src: img3ForHero, title: "Los mejores precios al alcanze de tu bolsillo" },
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

