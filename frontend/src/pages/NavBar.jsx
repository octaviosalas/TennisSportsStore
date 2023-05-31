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
          <div className='conteiner-nav' >
             <div className='cont-pb'  >
                <Link to={`/welcome/${userId}`} className='link'> <b><p className='my-tasks' id='inicio' title='Inicio'>Home</p></b></Link>
                <Link to={"/rackets"} className='link'> <b><p className='my-tasks' title='ver raquetas'  >Rackets</p></b> </Link>
                 <Link to={"/shoes"} className='link'><b><p className='my-pendt' title='Ver zapatillas'>Shoes</p></b></Link>
                 <Link to={"/tshirts"} className='link'> <b><p className='my-finish' title='Ver remeras'>T-Shirts</p></b> </Link>
                 <p className='name-sesion' onMouseOver={() => showSections()}>{name}</p>
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
