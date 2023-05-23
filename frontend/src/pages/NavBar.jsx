import React from 'react'
import { useState, useEffect } from 'react'
import carrito from "../img/carrito.jpg"
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import { useContext } from 'react'

const NavBar = () => {
   

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);

  useEffect(() => {
    setUserId(userCtx.userId);
  }, [userCtx.userId]);

  console.log(userId)


  return (
    <div className='conteiner-gral-nav'>
          <div className='conteiner-nav'>
             <div className='cont-pb'>
                <Link to={`/welcome/${userId}`} className='link'> <b><p className='my-tasks' id='inicio' title='Inicio'>Inicio</p></b></Link>
                <Link to={"/rackets"} className='link'> <b><p className='my-tasks' title='Ver mis Tareas'>Rackets</p></b> </Link>
                 <Link to={"/shoes"} className='link'><b><p className='my-pendt' title='Ver mis Pendientes'>Shoes</p></b></Link>
                 <Link to={"/tshirts"} className='link'> <b><p className='my-finish' title='Ver mis Terminadas'>T-Shirts</p></b> </Link>
            </div>
                <img src={carrito} alt="" title="Crear Tarea" className='img-logo' />
          </div>
    </div>
  )
}

export default NavBar
