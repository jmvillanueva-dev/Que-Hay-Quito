import EventSection from "../blog2components/EventSection"
import Gallery from "../blog2components/Gallery"
import Hero from "../blog2components/Hero"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlogPage2 = () => {
    return (
        <div>
        <Header />
        <main>
            <Hero />
            <EventSection />
            <Gallery />
        </main>
        <Footer />
        </div>
    )
}
export default BlogPage2


