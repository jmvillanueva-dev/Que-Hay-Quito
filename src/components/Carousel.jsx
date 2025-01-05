import React, { useState, useEffect } from "react";
import "./../styles/carousel.css";

import img1 from "../assets/centro-historico.png";
import img2 from "../assets/iglesia-compania.png";
import img3 from "../assets/virgen-panecillo-quito.png";

const Carousel = () => {
const images = [img1, img2, img3];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
    goToNext();
}, 5000);
return () => clearInterval(interval);
}, [currentIndex]);

const goToNext = () => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const goToPrev = () => {
setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
);
};

const goToSlide = (index) => {
setCurrentIndex(index);
};

return (
<div className="carousel">
    <div
    className="carousel-slide"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
    {images.map((image, index) => (
        <div
        key={index}
        className="carousel-item"
        style={{ backgroundImage: `url(${image})` }}
        >
        <div className="carousel-caption">
            <h1>Descubre lugares dignos de visitar</h1>
            <p>{`Slide ${index + 1}`}</p>
        </div>
        </div>
    ))}
    </div>

    <div className="carousel-controls">
    <button className="prev" onClick={goToPrev}>
        ❮
    </button>
    <button className="next" onClick={goToNext}>
        ❯
    </button>
    </div>

    <div className="carousel-indicators">
    {images.map((_, index) => (
        <button
        key={index}
        className={`indicator ${index === currentIndex ? "active" : ""}`}
        onClick={() => goToSlide(index)}
        />
    ))}
    </div>
</div>
);
};

export default Carousel;

