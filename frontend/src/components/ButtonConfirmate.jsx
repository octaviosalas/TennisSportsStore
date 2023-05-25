import React from 'react'
import "../styles/buysections.css"
import { Link } from 'react-router-dom'




const ButtonConfirmate = ({sendBuy}) => { 
    return ( 
      <div>
           <Link to={"http://mercadopago.com"}> <button className='fin' onClick={() => sendBuy()}>Terminar Compra</button> </Link>
      </div>
    )
  }
  
  export default ButtonConfirmate