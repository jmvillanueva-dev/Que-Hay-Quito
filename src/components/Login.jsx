import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'  
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import '../styles/login.css'

import logo from "../assets/icons/logo/logo.svg";
import googleIcon from "../assets/icons/google-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [receiveEmails, setReceiveEmails] = useState(false)
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccessMessage('')

        const auth = getAuth()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log('Inicio de sesión exitoso')

            // Redirigir al dashboard con el mensaje
            navigate('/Que-Hay-Quito/register')
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            setError('Credenciales inválidas. Por favor, intenta de nuevo.')
        }
    }

    return (
        <div className="login-container">
            <div className="logo">
                <Link to='/Que-Hay-Quito'>
                    <img src={logo} alt="QuéHayQuito Logo" className="logo-image" />
                </Link>
            </div>

            <div className="login-card">
                <h1>Bienvenido a QuéHayQuito</h1>
                <p className="subtitle">Inicia Sesión para continuar</p>

                <button className="social-button google">
                    <img src={googleIcon} alt="Google" />
                    Continuar con Google
                </button>

                <button className="social-button facebook">
                    <img src={facebookIcon} alt="Facebook" />
                    Continuar con Facebook
                </button>

                <div className="divider">
                    <p className="account-text">¿No tienes una cuenta?</p>
                    <Link to='/Que-Hay-Quito/register' className="register-link">REGÍSTRATE</Link>
                </div>
                
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
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
                        <a href="#">Términos de Servicio y Políticas de Privacidad</a> {' '}
                        de QuéHayQuito.
                    </p>

                    <button type="submit" className="submit-button">
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    )
}
