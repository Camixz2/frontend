import React, { useState } from 'react';  
import axios from '../api/axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, senha });
      navigate('/livros'); 
    } catch (err) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <TextField fullWidth label="Email" value={email} onChange={e => setEmail(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} sx={{ mb: 2 }} />
        <Button type="submit" variant="contained">Entrar</Button>
      </form>
    </Container>
  );
}
