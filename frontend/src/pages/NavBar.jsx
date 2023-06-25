import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



import { useState, useEffect } from 'react'
import carrito from "../img/carrp.png"
import ball from "../img/ball.png"
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import axios from 'axios'
import "../styles/navbar.css"
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import { useContext } from 'react'
import BubleCart from '../components/BubleCart'
import SectionsForUsers from '../components/SectionsForUsers'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {



  const {id} = useParams()

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);
  const [name, setName] = useState("")

  useEffect(() => {
    setUserId(userCtx.userId);
  }, [userCtx.userId]);

  useEffect(() => { 
    axios.get(`http://localhost:4000/user/${id}`)   
         .then(({data}) =>{ 
          setName(data.name)
         }) 
         .catch(err => console.log(err))
        
 }, [])





  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='conteiner-gral-nav' sx={{ backgroundColor: '#ee644c' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsTennisIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to={`/welcome/${userId}`} style={{textDecoration:"none", color:"white"}}><Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' },  fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', '&:hover': {color: 'black',},}} >  SHOP  </Typography> </Link> 

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" >
              <MenuIcon />
            </IconButton>
            <Menu  id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom',  horizontal: 'left', }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
          <Link to={"/rackets"} className='link' > <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >Rackets</Button></Link>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >Shoes</Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >T-Shirts</Button>
        
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <p className='name-sesion' style={{marginTop:"1vh", position:"relative", color:"white", textDecoration:"none", fontSize:"1.9vh", whiteSpace: 'nowrap'}} >{name}</p>
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <BubleCart />
              <Avatar alt="Remy Sharp" src={carrito}  sx={{ marginBottom:"2vh" }}/>
              </IconButton>
            </Tooltip>
            </div>
 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
                <MenuItem sx={{display:"inline-block"}} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{margin:"1vh"}} >Profile</Typography>
                  <Link to={"/usercart"} className='link'>  <Typography textAlign="center" sx={{margin:"1vh"}}  > My Cart</Typography></Link>
                  <Typography textAlign="center" sx={{margin:"1vh"}}  >Acount</Typography>
                  <Typography textAlign="center" sx={{margin:"1vh"}}  >Dashboard</Typography>
                  <Typography textAlign="center" sx={{margin:"1vh"}}  >Logout</Typography>
                </MenuItem>
           
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;


/*



import React from 'react'
import { useState, useEffect } from 'react'
import carrito from "../img/carrito.jpg"
import axios from 'axios'
import "../styles/navbar.css"
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import { useContext } from 'react'
import BubleCart from '../components/BubleCart'
import SectionsForUsers from '../components/SectionsForUsers'

const NavBar = () => {

  const {id} = useParams()

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);
  const [name, setName] = useState("")

  useEffect(() => {
    setUserId(userCtx.userId);
  }, [userCtx.userId]);

  useEffect(() => { 
    axios.get(`http://localhost:4000/user/${id}`)   
         .then(({data}) =>{ 
          setName(data.name)
         }) 
         .catch(err => console.log(err))
        
 }, [])



  const showSections = () => { 
     const div = document.querySelector(".section-div")
     div.style.display = "block"
    setTimeout(() => { 
      div.style.display = "none"
     }, 5000)
  }

  const dontShowSections = () => { 
    const div = document.querySelector(".section-div")
    div.style.display = "none"
 }


  return (
    <div className='conteiner-gral-nav'>
          <div className='conteiner-nav' style={{height:"4.7vh"}}>
             <div className='cont-pb' >
                <Link to={`/welcome/${userId}`} className='link' style={{marginTop:"1vh"}}> <b><p className='my-tasks' id='inicio' title='Inicio'>Home</p></b></Link>
                <Link to={"/rackets"} className='link' style={{marginTop:"1vh"}}> <b><p className='my-tasks' title='ver raquetas'  >Rackets</p></b> </Link>
                 <Link to={"/shoes"} className='link' style={{marginTop:"1vh"}}><b><p className='my-pendt' title='Ver zapatillas'>Shoes</p></b></Link>
                 <Link to={"/tshirts"} className='link' style={{marginTop:"1vh"}}> <b><p className='my-finish' title='Ver remeras'>T-Shirts</p></b> </Link>
            
                 <p className='name-sesion' style={{marginTop:"1vh"}} onMouseOver={() => showSections()}>{name}</p>
                 <div className='section-div'>
                     <SectionsForUsers/>
                 </div>
            </div>
            <BubleCart />
            <Link to={"/usercart"} className='link'> <img src={carrito} alt="" title="Ver mi carrito" className='img-logo' /></Link>
           
          </div>
    </div>
  )
}

export default NavBar


*/