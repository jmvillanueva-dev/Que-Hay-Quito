import '../styles/blogStyles/BlogList.css'
import img1 from '../assets/blogPlaces/basilica.avif'
import img2 from '../assets/blogPlaces/ronda.jpg'
import img3 from '../assets/blogPlaces/museo.avif'
import img4 from '../assets/blogPlaces/jardin.avif'
import img5 from '../assets/blogPlaces/capilla.avif'

const blogListData = [
        {
        image: img1,
        title: "Basílica del Voto Nacional",
        description: "Descubre la imponente arquitectura neogótica de esta iglesia emblemática de Quito.",
        },
        {
        image: img2,
        title: "Calle La Ronda",
        description: "Pasea por esta pintoresca calle colonial llena de arte, música y gastronomía tradicional.",
        },
        {
        image: img3,
        title: "Museo de la Ciudad",
        description:
            "Explora la historia de Quito desde la época precolombina hasta la actualidad en este fascinante museo.",
        },
        {
        image: img4,
        title: "Jardín Botánico de Quito",
        description: "Admira la diversidad de la flora ecuatoriana en este hermoso oasis en medio de la ciudad.",
        },
        {
        image: img5,
        title: "Capilla del Hombre",
        description: "Visita este museo dedicado a la obra del famoso pintor ecuatoriano Oswaldo Guayasamín.",
        },
    ]

    const BlogList = () => {
        return (
        <section id="blog-list">
            <h2>Todos los Artículos</h2>
            {blogListData.map((blog, index) => (
            <div key={index} className="blog-item">
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} />
                <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <button>Leer más</button>
                </div>
            </div>
            ))}
        </section>
        )
    }
    
    export default BlogList