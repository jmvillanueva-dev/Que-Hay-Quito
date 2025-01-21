import Header from "./Header";
import Carousel from "./Carousel";
import Destinations from "./Destinations";
import Blog from "./Blog"
import Footer from "./Footer";
import Newsletter from "./Newsletter";


function Home() {
	return (
		<>
			<Header />
			<Carousel />
			<Destinations />
			<Blog />
			<Newsletter />
			<Footer />
		</>
	)
}

export default Home;