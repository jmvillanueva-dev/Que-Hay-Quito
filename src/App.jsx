import React from 'react';
import { Routes, Route } from 'react-router-dom';  

import Home from './components/Home';
import LoginForm from './components/Login';
import RegisterForm from './components/RegisterForm';
import BlogPage from './pages/BlogPage'
import BlogPage2 from './pages/BlogPage2'
import Crud from './components/Registro de Libros/HomeCrud';
import Tienda from './components/Tienda/HomeTienda';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/Que-Hay-Quito" element={<Home />} />
			<Route path="/Que-Hay-Quito/login" element={<LoginForm />} />
			<Route path="/Que-Hay-Quito/register" element={<RegisterForm />} />
			<Route path="/Que-Hay-Quito/blog" element={<BlogPage />} />
			<Route path="/Que-Hay-Quito/blog2" element={<BlogPage2 />} />
			<Route path="/Que-Hay-Quito/crud" element={<Crud />} />
			<Route path="/Que-Hay-Quito/tienda" element={<Tienda />} />


		</Routes>
	);
}

export default App;
