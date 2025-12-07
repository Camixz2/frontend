// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Backend rodando localmente
  withCredentials: true, // Permitir enviar cookies de sessão
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;