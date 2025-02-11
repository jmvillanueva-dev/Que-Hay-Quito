import Header from "../../components/Tienda/HeaderTienda";
import Informacion from "../../components/Tienda/Informacion";
import Ofertas from "../../components/Tienda/Ofertas";
import Titulos from "../../components/Tienda/Titulos";
import Productos from "../../components/Tienda/Productos";
import Footer from "../../components/Footer";
import ContextProvider from "../../context/Context";
import Carousel from "../../components/Tienda/CarouselTienda";






function HomeTienda() {
	return (
		<>
		<ContextProvider>
			<Header />
			<Carousel />
			<Ofertas />
			<Titulos />
            <Productos />
            <Footer/>
		</ContextProvider>
		</>
	)
}

export default HomeTienda;