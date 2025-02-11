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
    const navigate = useNavigate()

    // Correo y contraseña específicos del administrador
    const adminEmail = "admin@gmail.com"
    const adminPassword = "admin123"

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const auth = getAuth()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            
            // Verificar si el correo y la contraseña son los del administrador
            if (email === adminEmail && password === adminPassword) {
                console.log('Usuario administrador')
                // Redirigir al dashboard de administrador
                navigate('/Que-Hay-Quito/crud')
                alert("INGRESO EXITOSO")
            } else {
                console.log('Inicio de sesión exitoso, pero no es administrador')
                // Redirigir a la página normal
                navigate('/Que-Hay-Quito/register')
            }
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
