import '../../styles/Tienda/Informacion.css'
import Button from '../Button'
import '../../styles/button.css'

function Informacion() {
    return (
        <>
            <section id="sitioPrincipal" className="padding-top opciones"> 
                <div className="container"> 
                    <div className="flex flex-column align-items banner">
                        <header className="headerTienda">
                            <div className="headerTienda-content">
                                <div className="headerTienda-txt">
                                    <div className="flex align-items font-color-white font-size-24px">
                                        <h3>BIENVENIDOS A NUESTRA TIENDA</h3>
                                    </div>
                                    <div>
                                        <h2 className="font-bold-2 font-size-24px" id="typed"> 
                                            <span className="typed"></span> 
                                        </h2>
                                    </div>
                                    <p className="font-size-17px">
                                        "Un mundo de conocimiento al alcance de un clic"
                                    </p>
                                    <div className="buttons">
                                        <Button variant="editar">
                                            Información
                                        </Button>
                                        <Button variant="eliminar">
                                            Leer más
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Informacion;
