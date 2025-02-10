import '../../styles/Tienda/Ofertas.css'
import iconoOne from '../../assets/store-items/icono_1.png'
import iconoTwo from '../../assets/store-items/icono_2.png'
import iconoThree from '../../assets/store-items/icono_3.png'

function Ofertas() {
    return (
        <>
            <div class="flex flex-column align-items banner">
                <section class="oferts container">

                    <div class="ofert-1 b1">
                        <div class="ofert-txt">
                            <h3>"Libros universitarios al mejor precio, entre estudiantes."</h3>
                            <a href="#" >leer mas</a>
                        </div>
                        <div class="ofert-img">
                            <img src= {iconoOne}></img>
                        </div>
                    </div>
            
                    <div class="ofert-1 b2">
                        <div class="ofert-txt">
                            <h3>"Conecta, compra y aprende en tu comunidad universitaria"</h3>
                            <a href="#" >leer mas</a>
                        </div>
                        <div class="ofert-img">
                            <img src= {iconoTwo}></img>
                        </div>
                    </div>
            
                    <div class="ofert-1 b3">
                        <div class="ofert-txt">
                            <h3>"Libros universitarios al mejor precio, entre estudiantes."</h3>
                            <a href="#" >leer mas</a>
                        </div>
                        <div class="ofert-img">
                            <img src= {iconoThree}></img>
                        </div>
                    </div>
            
                </section>
            </div>
        </>
    )
}

export default Ofertas;