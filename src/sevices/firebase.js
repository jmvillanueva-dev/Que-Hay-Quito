import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Importa Firebase Authentication

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJYOJyY0hbxuT-NOkm5mq2zhAjxs6aEKo",
  authDomain: "que-hay-quito-524e2.firebaseapp.com",
  projectId: "que-hay-quito-524e2",
  storageBucket: "que-hay-quito-524e2.appspot.com",
  messagingSenderId: "1016086167574",
  appId: "1:1016086167574:web:someappId",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener instancias de Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);  // Obtén la instancia de autenticación

// Exportar las funciones de Firestore y Auth
export { db, auth, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };
