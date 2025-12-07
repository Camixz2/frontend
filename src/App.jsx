import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Livros from './pages/Livros';
import LivroForm from './pages/LivroForm.jsx';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/livros/new" element={<LivroForm />} />
        <Route path="/livros/edit/:id" element={<LivroForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
