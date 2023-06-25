import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Linkk from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {


  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

 function tryToRegister () { 
    
   
    const newUserToBeRegistered = { 
        name: name,
        email: email, 
        password: password
    }
     axios.post("http://localhost:4000/register", newUserToBeRegistered)
        .then(({data}) => { 
            console.log({data})
            setMessage(data.Mensaje) //data.mensaje seria la respuesta de mi controlador, que tiene un json, con la propiedad mensaje, que devuelve "creado correctamente"
            console.log(message)
            setTimeout(() => { 
             navigate("/login")
            }, 2500)
        })
           .catch(err => console.log(err))
}
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"> Create an Acount</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth  id="name" label="Name" name="name" autoComplete="name" autoFocus value={name} onChange={(e) => setName(e.target.value) }/>
            <TextField margin="normal" required fullWidth  id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value) }/>
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value) } />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth  variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => tryToRegister()}>Register </Button>
            <Grid container>
              <Grid item xs>
                <Linkk href="#" variant="body2" style={{margin:"2vh"}}> Forgot password?</Linkk>
              </Grid>
              <Grid item>
              <Link to={"/login"}><Linkk href="#" variant="body2">{"Don't have an account? Sign Up"} </Linkk></Link>  
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

