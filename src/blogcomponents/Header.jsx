import { Link } from "react-router-dom"
import logo from "../assets/images/icons/logoQQ.png"

const Header = () => {
    return (
        <header className="w-full bg-white fixed">
        <div className="flex container align-items justify-between">
            <Link to="/">
            <div className="logo">
                <img src={logo || "/placeholder.svg"} alt="logo empresa" />
                <div className="logo-text flex flex-column">
                quéHay
                <span className="font-bold-900 font-size-24px">Quito</span>
                </div>
            </div>
            </Link>

            <div className="flex align-items">
            <nav id="nav">
                <div className="nav-bar flex align-items">
                <div className="nav-search">
                    <form action="">
                    <img src="/src/assets/images/icons/ic_search.png" alt="icono búsqueda" />
                    <input
                        type="search"
                        id="bar-search"
                        className="border-black"
                        size={25}
                        placeholder=" Encuentra lo que buscas..."
                    />
                    </form>
                    <button className="animation">Buscar</button>
                </div>
                </div>
            </nav>
            <Link to="/login" className="btn-primary font-color-white animation border-shadow">
                <div className="flex align-items gap-8 font-color-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
                    <path fill="white" d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3" />
                    <path
                    fill="white"
                    fillRule="evenodd"
                    d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75"
                    clipRule="evenodd"
                    />
                </svg>
                <span>Iniciar sesión</span>
                </div>
            </Link>
            </div>
        </div>
        </header>
    )
}

export default Header

