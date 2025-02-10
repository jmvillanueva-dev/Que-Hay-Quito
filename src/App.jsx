import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TestFirestore from './sevices/api';   

import Home from './components/Home';
import LoginForm from './components/Login';
import RegisterForm from './components/RegisterForm';
import Crud from './components/Registro de Libros/Crud';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/Que-Hay-Quito" element={<Home />} />
			<Route path="/Que-Hay-Quito/login" element={<LoginForm />} />
			<Route path="/Que-Hay-Quito/register" element={<RegisterForm />} />
			<Route path="/Que-Hay-Quito/crud" element={<Crud />} />

		</Routes>
	);
}

export default App;
