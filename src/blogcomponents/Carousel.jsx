
import { useState, useEffect } from "react"
import '../styles/blogStyles/Carousel.css'
import imagen1 from '../assets/blogPlaces/panecillo.avif'
import imagen2 from '../assets/blogPlaces/mitaddelmundo.avif'
import imagen3 from '../assets/blogPlaces/telefericoQ.jpg'

const carouselData = [
    {
        image: imagen1,
        title: "El Panecillo: El Mirador de Quito",
        description: "Descubre la historia y la vista panorámica desde este icónico monumento.",
    },
    {
        image: imagen2,
        title: "La Mitad del Mundo: Entre Dos Hemisferios",
        description: "Visita el monumento que marca la línea ecuatorial y aprende sobre la cultura ecuatoriana.",
    },
    {
        image: imagen3,
        title: "Teleférico de Quito: Un Viaje a las Alturas",
        description: "Explora Quito desde las alturas con este emocionante recorrido en teleférico.",
    },
]

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselData.length) % carouselData.length)
    }

    return (
        <section id="carousel">
            <div className="carousel-container">
                {carouselData.map((slide, index) => (
                    <div key={index} className="carousel-slide" style={{ display: index === currentSlide ? "block" : "none" }}>
                        <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
                        <div className="carousel-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <button className="btn-text">Leer más</button>
                        </div>
                    </div>
                ))}
            </div>
            <button id="prevBtn" className="carousel-btn prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button id="nextBtn" className="carousel-btn next" onClick={nextSlide}>
                &#10095;
            </button>
        </section>
    )
}

export default Carousel

