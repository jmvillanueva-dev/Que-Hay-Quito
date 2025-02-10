import { Link } from "react-router-dom"
import logo from "../assets/icons/logo/iconQQ.svg"

const Footer = () => {
return (
        <footer id="footer" className="background-black-solid">
        <div className="bg-white">
            <div className="container">
            <div className="flex flex-column">
                <div className="flex align-items justify-between padding-32">
                <div className="flex flex-column w-half">
                    <div className="flex align-items justify-between margin-bottom gap-8">
                    <Link to="/">
                        <div className="logo width-max-30">
                        <img src={logo || "/placeholder.svg"} alt="logo empresa" />
                        <div className="logo-text flex flex-column font-size-20px max-w">
                            quéHay
                            <span className="font-bold-900 font-size-24px">Quito</span>
                        </div>
                        </div>
                    </Link>
                    <div>
                        <span className="font-color-blue font-bold font-size-20px">Obten un 20% en tu primera compra.</span>
                    </div>
                    </div>
                    <div>
                    <form className="flex flex-column w-full margin-bottom">
                        <div className="margin-bottom block">
                        <input
                            required
                            type="email"
                            className="border-black font-normal w-full"
                            placeholder="queHayQuito@email.com"
                        />
                        </div>
                        <button className="btn-red font-color-white animation">Suscríbete</button>
                    </form>
                    <p className="small-font-size text-center">
                        Suscríbete a nuestra newsletter y recibe promociones.
                        <br />
                        Revisa las
                        <Link to="/terms-policy" className="font-bold underline small-font-size font-color-blue">
                        Políticas de Privacidad
                        </Link>
                    </p>
                    </div>
                </div>
                <div className="flex flex-column margin-top">
                    <h3 className="uppercase margin-bottom">Acerca de Nosotros</h3>
                    <div className="flex flex-column">
                    <a href="#footer" className="padding-16-rl margin-bottom text-blue">
                        Historia
                    </a>
                    <a href="#footer" className="padding-16-rl margin-bottom text-blue">
                        Trabaja con nosotros
                    </a>
                    <Link to="/terms-policy" className="padding-16-rl margin-bottom text-blue">
                        Políticas de privacidad
                    </Link>
                    </div>
                    <a
                    href="https://wa.me/5930995910820?text=Hola%20QuéHayQuito!%20Me%20gustaría%20saber..."
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <div className="margin-1-rl margin-bottom margin-top uppercase">¿Necesitas ayuda?</div>
                    <button className="btn-whatsapp animation">
                        <div className="flex align-items">
                        <img
                            src="/src/assets/images/icons/sm/whatsapp.png"
                            alt="whatsapp-icon"
                            className="display-none"
                        />
                        <span className="margin-1-rl">Contáctanos aquí</span>
                        </div>
                    </button>
                    </a>
                </div>
                <div className="map-container flex flex-column align-start margin-top">
                    <h3 className="uppercase margin-bottom">Encuéntranos en:</h3>
                    <div className="map-styles">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.16357919355!2d-78.50330149447923!3d-0.2124413000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses-419!2sec!4v1731338959953!5m2!1ses-419!2sec"
                        aria-label="Mapa Qué Hay Quito, Ecuador"
                    ></iframe>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="padding-32 font-color-white small-font-size text-center">
            &copy; Copyright 2024 | QuéHayQuito Company S.A | Todos los derechos reservados.
        </div>
        </footer>
    )
}

export default Footer

