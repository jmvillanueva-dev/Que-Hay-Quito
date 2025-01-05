import React, { useState } from "react";
import "./../styles/carousel.css";

import img1ForHero from "../../public/img/centro-historico.png";
import img2ForHero from "../../public/img/iglesia-compania.png";
import img3ForHero from "../../public/img/virgen-panecillo-quito.png";

const Carousel = () => {
const [current, setCurrent] = useState(0);
const images = [
{ src: img1ForHero, title: "Destino 1", desc: "Explora paisajes inolvidables." },
{ src: img2ForHero, title: "Destino 2", desc: "Aventuras en la naturaleza." },
{ src: img3ForHero, title: "Destino 3", desc: "Relájate y disfruta de la vista." },
];

const handlePrev = () => {
setCurrent(current === 0 ? images.length - 1 : current - 1);
};

const handleNext = () => {
setCurrent(current === images.length - 1 ? 0 : current + 1);
};

return (
<div className="carousel"> 
    {images.map((image, index) => (
    <div    
        key={index}
        className={`carousel-item ${index === current ? "active" : ""}`}
    >
        <img src={image.src} alt={image.title} className="carousel-image" />
        <div className="carousel-caption">
        <h3>{image.title}</h3>
        <p>{image.desc}</p>
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
</div>
);
};

export default Carousel;

