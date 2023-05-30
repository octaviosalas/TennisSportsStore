import React,  { useContext } from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserContext } from '../store/user.context.js'


const SectionsForUsers = () => {

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);

  useEffect(() => {
    setUserId(userCtx.userId);
  }, [userCtx.userId]);


  return (
    <div className='cont-sections-users' > 
          <Link to={`/myBuys/${userId}` }><button className='bt-sections'>Ver mis compras</button></Link>
          <Link to={"/favourites"}><button className='bt-sections'>Ver mis favoritos</button></Link>
         <Link to={"/"}><button className='bt-sections'>Cerrar Sesion</button></Link>
    </div>
  )
}

export default SectionsForUsers
