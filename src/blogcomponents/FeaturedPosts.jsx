import '../styles/blogStyles/FeaturedPosts.css'
import image1 from '../assets/blogPlaces/Vista-noctura-de-Quito.avif'
import image2 from '../assets/blogPlaces/mercadoOtavalo.avif'
import image3 from '../assets/blogPlaces/parqueCotopaxi.avif'

const featuredPostsData = [
        {
        image: image1,
        title: "Centro Histórico de Quito",
        description:
            "Explora las calles coloniales y las iglesias barrocas del primer Patrimonio Cultural de la Humanidad.",
        },
        {
        image: image2,
        title: "Mercado de Otavalo",
        description: "Sumérgete en la cultura indígena y encuentra artesanías únicas en este colorido mercado.",
        },
        {
        image: image3,
        title: "Parque Nacional Cotopaxi",
        description: "Aventúrate en uno de los volcanes activos más altos del mundo y disfruta de paisajes impresionantes.",
        },
    ]

const FeaturedPosts = () => {
        return (
        <section id="featured-posts">
            <h2>Artículos Destacados</h2>
            <div className="featured-grid">
            {featuredPostsData.map((post, index) => (
                <div key={index} className="featured-card">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button>Leer más</button>
                </div>
            ))}
            </div>
        </section>
    )
}

export default FeaturedPosts
