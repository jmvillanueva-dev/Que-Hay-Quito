import "../styles/blog2Styes/Gallery.css"
import imagen1 from '../assets/blog2Places/galeria1.avif'
import imagen2 from '../assets/blog2Places/evento2.avif'
import imagen3 from '../assets/blog2Places/evento3.jpg'
import imagen4 from '../assets/blog2Places/evento4.avif'
import imagen5 from '../assets/blog2Places/evento5.avif'

function Gallery() {
    const images = [
        imagen1,
        imagen2,
        imagen3,
        imagen4,
        imagen5,
    ]

    return (
        <section id="galeria">
        <h2>Galería de Imágenes</h2>
        <div className="slider">
            {images.map((image, index) => (
            <img key={index} src={image || "/placeholder.svg"} alt={`Evento ${index + 1}`} />
            ))}
        </div>
        </section>
    )
}

export default Gallery

