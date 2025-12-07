import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Livros() {
    const [livros, setLivros] = useState([]);

    const fetch = async () => {
        try {
            const res = await axios.get('/api/livros');  
            console.log(res.data);  
            setLivros(res.data);
        } catch (err) {
            console.error("Erro ao buscar livros:", err);
        }
    };

    useEffect(() => {
        fetch(); 
    }, []); 

    const handleDelete = async (id) => {
        if (!confirm('Excluir?')) return;
        await axios.delete(`/api/livros/${id}`);
        fetch();  
    };

    return (
        <Container>
            <h2>Livros</h2>
            <Button component={Link} to="/livros/new" variant="contained" sx={{ mb: 2 }}>Novo</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Autor</TableCell>
                        <TableCell>Ano</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {livros.map(l => (
                        <TableRow key={l.id}>
                            <TableCell>{l.titulo}</TableCell>
                            <TableCell>{l.autor}</TableCell>
                            <TableCell>{l.ano}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/livros/edit/${l.id}`} size="small">Editar</Button>
                                <Button onClick={() => handleDelete(l.id)} size="small" color="error">Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </Container>
    );
}
