import React, { useState } from 'react';
import axios from '../api/axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { nome, email, senha });
      alert('Registrado com sucesso. Faça login.');
      navigate('/login');
    } catch (err) {
      alert('Erro ao registrar: ' + err?.response?.data?.error || err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <TextField fullWidth label="Nome" value={nome} onChange={e => setNome(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" value={email} onChange={e => setEmail(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} sx={{ mb: 2 }} />
        <Button type="submit" variant="contained">Registrar</Button>
      </form>
    </Container>
  );
}
