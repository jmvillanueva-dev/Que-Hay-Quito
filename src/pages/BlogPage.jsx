
import Carousel from "../blogcomponents/Carousel"
import FeaturedPosts from "../blogcomponents/FeaturedPosts"
import BlogList from "../blogcomponents/BlogList"
import Header from "../components/Header";
import Footer from "../components/Footer"
import Comments from '../blogcomponents/Comments'

const BlogPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="text-center">
          <h1 className="titulo">Articulos de Quito</h1>
        </section>
        <Carousel />
        <FeaturedPosts />
        <BlogList />
        <Comments />
      </main>
      <Footer />
    </div>
  )
}
export default BlogPage

