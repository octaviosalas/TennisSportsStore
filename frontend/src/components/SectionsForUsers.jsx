import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

const SectionsForUsers = () => {
  return (
    <div className='cont-sections-users' > 
          <Link to={"/myBuys"}><button className='bt-sections'>Ver mis compras</button></Link>
          <Link to={"/favourites"}><button className='bt-sections'>Ver mis favoritos</button></Link>
         <Link to={"/"}><button className='bt-sections'>Cerrar Sesion</button></Link>
    </div>
  )
}

export default SectionsForUsers
