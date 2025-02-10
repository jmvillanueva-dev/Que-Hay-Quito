import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs } from './firebase';  // Importa correctamente las funciones

const TestFirestore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para los campos del formulario
  const [detalle, setDetalle] = useState('');
  const [precio, setPrecio] = useState('');

  // Función para obtener datos de Firestore
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const productosData = [];
      querySnapshot.forEach((doc) => {
        productosData.push({ id: doc.id, ...doc.data() });
      });
      setData(productosData);
      setLoading(false);
    } catch (err) {
      setError('Error al obtener los datos: ' + err.message);
      setLoading(false);
    }
  };

  // Función para guardar los datos en Firestore
  const saveData = async () => {
    if (detalle === '' || precio === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      await addDoc(collection(db, "productos"), {
        detalle: detalle,
        precio: parseFloat(precio)  // Asegúrate de convertir a número el precio
      });
      alert('Producto guardado con éxito');
      fetchData(); // Vuelve a obtener los datos después de guardar
      setDetalle(''); // Limpiar los campos del formulario
      setPrecio('');
    } catch (err) {
      console.error('Error al guardar el producto: ', err.message);
    }
  };

  // Cargar los datos al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Datos de Firestore:</h2>
      <ul>
        {data.map((producto) => (
          <li key={producto.id}>
            {producto.detalle} - ${producto.precio}
          </li>
        ))}
      </ul>

      {/* Formulario para agregar nuevo producto */}
      <div>
        <h3>Agregar nuevo producto:</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Detalle del producto" 
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Precio del producto" 
            value={precio}
            onChange={(e) => setPrecio(e.target.value)} 
          />
          <button onClick={saveData}>Guardar Producto</button>
        </form>
      </div>
    </div>
  );
};

export default TestFirestore;
