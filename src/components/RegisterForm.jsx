import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../sevices/firebase";  // Asegúrate de importar 'auth'
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importar esta función
import { collection, addDoc } from "firebase/firestore"; 
import "./../styles/login.css";

import logo from "../assets/icons/logo/logo.svg";
import googleIcon from "../assets/icons/google-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [receiveEmails, setReceiveEmails] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Función para agregar datos de usuario a Firestore
    const addUserToFirestore = async (uid, userData) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                ...userData,
                uid,
                createdAt: new Date(),
            });
            console.log("Documento agregado con ID: ", docRef.id);
            return true;
        } catch (e) {
            console.error("Error al agregar documento: ", e);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            // Crear usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Preparar los datos adicionales del usuario
            const userData = {
                name,
                email,
                receiveEmails,
            };

            // Agregar los datos adicionales a Firestore
            const success = await addUserToFirestore(user.uid, userData);

            if (success) {
                console.log("Usuario registrado exitosamente!");
                alert("Usuario registrado exitosamente!");
                navigate("/Que-Hay-Quito/login");
            } else {
                setError("Error al registrar el usuario en la base de datos.");
            }
        } catch (e) {
            console.error("Error al registrar usuario: ", e);
            setError("La contraseña de de contar con al menos 6 caracteres");
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <Link to="/Que-Hay-Quito">
                    <img src={logo || "/placeholder.svg"} alt="QuéHayQuito Logo" className="logo-image" />
                </Link>
            </div>

            <div className="login-card">
                <h1>Regístrate en QuéHayQuito</h1>
                <p className="subtitle">Crea tu cuenta para continuar</p>

                <button className="social-button google">
                    <img src={googleIcon || "/placeholder.svg"} alt="Google" />
                    Registrarse con Google
                </button>

                <button className="social-button facebook">
                    <img src={facebookIcon || "/placeholder.svg"} alt="Facebook" />
                    Registrarse con Facebook
                </button>

                <div className="divider">
                    <p className="account-text">O regístrate con tu correo electrónico</p>
                </div>

                {error && <p className="error-message">{error}</p>}

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
                        Al crear una cuenta, aceptas los <a href="#">Términos de Servicio y Políticas de Privacidad</a> de
                        QuéHayQuito.
                    </p>

                    <button type="submit" className="submit-button">
                        Registrarse
                    </button>
                </form>

                <div className="divider">
                    <p className="account-text">¿Ya tienes una cuenta?</p>
                    <Link to="/Que-Hay-Quito/login" className="login-link">
                        INICIA SESIÓN
                    </Link>
                </div>
            </div>
        </div>
    );
}