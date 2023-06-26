import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Linkk from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'


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

export default function Login() {



  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [load, setLoad ] = useState(false)
  const [incorrectPassword, setIncorrectPassword] = useState(false)

 


 function tryToLogin() { 

      const infoUser =  { 
          email: email,
          password: password
      }
      axios.post("http://localhost:4000/login", infoUser)
           .then(({data}) => {                               //la res de la promesa va en {} por que es una respuesta en json. A la cual accedo con "data".
              console.log(data)
              setLoad(true)
              setTimeout(() => { 
                  navigate(`/welcome/${data?.user.id}`)      //como mi ruta devuelve un json llamado user que tiene "id" y "name", y a ese json accedo con "data". Le digo que me enlace el "data.user.id" a la ruta welcome.
              },1000)
           })
           .catch((err) => { 
            console.log(err)
          
            alert(err)
            console.log("xfnaskfhkasp")
           })
  } 






  return (
    
    <>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}
          sx={{
            backgroundImage: 'url(https://s3.amazonaws.com/mobileappdaily/mad/uploads/img_women_shopping_apps.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{  my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">  Sign in </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="email" label="Email Address"  name="email" autoComplete="email" autoFocus value={email}   onChange={(e) => setEmail(e.target.value)}/>
              <TextField margin="normal" required  fullWidth name="password" label="Password" type="password" id="password"  autoComplete="current-password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => tryToLogin()} >  Sign In </Button>
              <Grid container>
                <Grid item xs>
                  <Linkk href="#" variant="body2">
                    Forgot password?
                  </Linkk>
                </Grid>
                <Grid item>
                  <Linkk href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Linkk>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

      <div>
          {incorrectPassword && <p>error</p>}
      </div>
    </>
  
  );
}
