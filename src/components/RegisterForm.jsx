import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./../styles/login.css"

import logo from "../assets/logo.svg";
import googleIcon from "../assets/icons/google-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";


export default function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [receiveEmails, setReceiveEmails] = useState(false)

    const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { name, email, password, confirmPassword, receiveEmails })
    }

    return (
    <div className="login-container">
        <div className="logo">
            <Link to='/Que-Hay-Quito'>
                <img src={logo} alt="QuéHayQuito Logo" className="logo-image" />
            </Link>
        </div>
        
        <div className="login-card">
        <h1>Regístrate en QuéHayQuito</h1>
        <p className="subtitle">Crea tu cuenta para continuar</p>

        <button className="social-button google">
            <img src={googleIcon} alt="Google" />
            Registrarse con Google
        </button>

        <button className="social-button facebook">
            <img src={facebookIcon} alt="Facebook" />
            Registrarse con Facebook
        </button>

        <div className="divider">
            <p className="account-text">O regístrate con tu correo electrónico</p>
        </div>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre completo*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />

            <input
            type="email"
            placeholder="Correo electrónico*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            
            <input
            type="password"
            placeholder="Contraseña*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

            <input
            type="password"
            placeholder="Confirmar contraseña*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />

            <div className="recaptcha-container">
            <div className="recaptcha-mock">
                <input type="checkbox" />
                <span>No soy un robot</span>
                <div className="recaptcha-logo">reCAPTCHA</div>
            </div>
            </div>

            <div className="checkbox-container">
            <input
                type="checkbox"
                id="emailConsent"
                checked={receiveEmails}
                onChange={(e) => setReceiveEmails(e.target.checked)}
            />
            <label htmlFor="emailConsent">
                Quiero recibir emails con recomendaciones de lugares y noticias más relevantes
            </label>
            </div>

            <p className="terms">
            Al crear una cuenta, aceptas los{' '}
            <a href="#">Términos de Servicio y Políticas de Privacidad</a>
            {' '}de QuéHayQuito.
            </p>

            <button type="submit" className="submit-button">
            Registrarse
            </button>
        </form>

        <div className="divider">
            <p className="account-text">¿Ya tienes una cuenta?</p>
            <Link to="/Que-Hay-Quito/login" className="login-link">INICIA SESIÓN</Link>
        </div>
        </div>
    </div>
    )
};

