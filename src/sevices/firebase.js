import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Configuración de Firebase (reemplaza con tus valores específicos)
const firebaseConfig = {
  apiKey: "AIzaSyDJYOJyY0hbxuT-NOkm5mq2zhAjxs6aEKo",  // Reemplaza con tu clave de API
  authDomain: "que-hay-quito-524e2.firebaseapp.com",  // Usualmente es: <nombre-del-proyecto>.firebaseapp.com
  projectId: "que-hay-quito-524e2",  // Tu ID de proyecto
  storageBucket: "que-hay-quito-524e2.appspot.com",  // Usualmente es: <nombre-del-proyecto>.appspot.com
  messagingSenderId: "1016086167574",  // ID del proyecto
  appId: "1:1016086167574:web:someappId",  // Reemplaza con tu appId (puedes encontrarlo en la consola de Firebase)
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar las funciones de Firestore
export { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };

