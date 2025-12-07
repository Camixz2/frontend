import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar(){
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
  const logout = () => {

    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Biblioteca
        </Typography>
        <Button color="inherit" component={Link} to="/livros">Livros</Button>
        {!token ? (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        ) : (
          <Button color="inherit" onClick={logout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
