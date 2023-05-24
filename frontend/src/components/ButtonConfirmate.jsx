import React from 'react'
import "../styles/buysections.css"
import { Link } from 'react-router-dom'




const ButtonConfirmate = () => { 
    return ( 
      <div>
           <Link to={"http://mercadopago.com"}> <button className='fin' >Terminar Compra</button> </Link>
      </div>
    )
  }
  
  export default ButtonConfirmate