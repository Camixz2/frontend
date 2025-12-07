import React, { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';

export default function LivroForm() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`/livros/${id}`).then(res => {
        setTitulo(res.data.titulo);
        setAutor(res.data.autor);
        setAno(res.data.ano || '');
      }).catch(() => alert('Erro ao buscar livro'));
    }
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const body = { titulo, autor, ano: ano ? parseInt(ano) : null };
    try {
      if (id) {
        await axios.put(`/livros/${id}`, body);
      } else {
        await axios.post('/livros', body);
      }
      navigate('/livros');
    } catch (err) {
      alert('Erro ao salvar livro');
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>{id ? 'Editar' : 'Novo'} Livro</h2>
      <form onSubmit={submit}>
        <TextField fullWidth label="Título" value={titulo} onChange={e => setTitulo(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Autor" value={autor} onChange={e => setAutor(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Ano" value={ano} onChange={e => setAno(e.target.value)} sx={{ mb: 2 }} />
        <Button type="submit" variant="contained">Salvar</Button>
      </form>
    </Container>
  );
}
