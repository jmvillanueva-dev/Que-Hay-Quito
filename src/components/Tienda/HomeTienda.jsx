import Header from "../../components/Tienda/HeaderTienda";
import Informacion from "../../components/Tienda/Informacion";
import Ofertas from "../../components/Tienda/Ofertas";
import Titulos from "../../components/Tienda/Titulos";
import Productos from "../../components/Tienda/Productos";
import ContextProvider from "../../context/Context"; 





function HomeTienda() {
	return (
		<>
		<ContextProvider>
			<Header />
			<Informacion />
			<Ofertas />
			<Titulos />
            <Productos />
		</ContextProvider>
		</>
	)
}

export default HomeTienda;