
import NavBar from './NavBar'
import "../styles/settings.css"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import pngname from "../img/name.png"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
import { Link } from 'react-router-dom'



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

const Settings = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [lastPassword, setLastPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")


      
   const changeUserData = () => { 
      const newUserData = ( { 
        email: email, 
        lastPassword: lastPassword,
        newPassword: newPassword
      })
      axios.put("http://localhost:4000/changeUserData", newUserData)
           .then((res) => { 
            console.log(res.data)
           
            setTimeout(() => { 
                navigate("/login")
            }, 1800)
               
           })
           .catch((err) => { 
            console.log(err)
            alert("La contraseña esta mal")
           })
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
    <div>
      <NavBar/> 
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"> Change your Password</Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField margin="normal" required fullWidth  id="Email" label="Email" name="Email" autoComplete="Email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)}/>

            <TextField margin="normal" required fullWidth  id="Last Password" label="Last Password" name="Last Password" autoComplete="Last Password" autoFocus value={lastPassword} onChange={(e) => setLastPassword(e.target.value)}/>
            <TextField margin="normal" required fullWidth name="New Password" label="New Password" type="password" id="New Password" autoComplete="current-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            
            <Button type="submit" fullWidth  variant="contained" sx={{ mt: 3, mb: 2 }}  onClick={() => changeUserData()}>Save Changes </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>


    </div>
       
   
  
  );
}

export default Settings


/*



import React from 'react'
import NavBar from './NavBar'
import "../styles/settings.css"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import pngname from "../img/name.png"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Settings = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [lastPassword, setLastPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showConfig, setShowConfig] = useState(true)

      
   const changeUserData = () => { 
      const newUserData = ( { 
        email: email, 
        lastPassword: lastPassword,
        newPassword: newPassword
      })
      axios.put("http://localhost:4000/changeUserData", newUserData)
           .then((res) => { 
            console.log(res.data)
            setShowConfig(false)
            setTimeout(() => { 
                navigate("/login")
            }, 1800)
               
           })
           .catch((err) => { 
            console.log(err)
            alert("La contraseña esta mal")
           })
   }
   
  return (
    <div>
      <NavBar/> 
      <h1 className='tittle'>In this section you can modify your access data</h1>
        <div className="formContainer">  
        
           { showConfig ?  ( 
            
              <div>
              

                <h3>Change or Dates</h3>
  
                   <form >

                      <div className="inputContainer">
                         <div className="left">
                            <label htmlFor="correo">Email </label>
                               <input name="correo" id="correo" type="email" placeholder="Email..."  autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                         </div>
                               <img src={pngemail} alt="" />
                     </div>

                     <div className="inputContainer">
                        <div className="left">
                          <label htmlFor="contraseña">Last Password</label>
                             <input name="contraseña" id="contraseña" type="password" placeholder="Last Password..." autoComplete="off" value={lastPassword} onChange={(e) => setLastPassword(e.target.value)} />
                        </div>
                             <img src={pngpassword} alt="" />
                     </div>

                    <div className="inputContainer">
                        <div className="left">
                           <label htmlFor="contraseña">New Password</label>
                             <input name="contraseña" id="contraseña" type="password" placeholder="New Password..." autoComplete="off"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                       </div>
                            <img src={pngpassword} alt="" />
                    </div>

                        <button type='button' className='btn' onClick={() => changeUserData()}> Save Changes</button>

                </form>
            </div>
           ) : (   <p> Your password has been changed correctly 😉✔</p>  )}

        
            
    
  </div>


    </div>
       
   
  
  );
}

export default Settings



*/