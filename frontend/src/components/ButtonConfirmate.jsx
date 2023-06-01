import React from 'react'
import "../styles/buysections.css"
import { Link } from 'react-router-dom'
import CartContext from '../store/cart.context.js'
import { useContext, useEffect, useState } from 'react'
import ShippingInformation from '../pages/ShippingInformation'




const ButtonConfirmate = () => { 

  const cartCtx = useContext(CartContext)
  const [showShipping, setShowShipping] = useState(false)

  const showTheShipping = () => { 
    setShowShipping(true)
 
  }

  

    return ( 
      <div className='gral-confirmate'>
            <button className='fin' onClick={() =>  showTheShipping()}>coordinate shipping</button> 
              {showShipping ? <ShippingInformation prod={cartCtx.products}/> : null}
         
      </div>
    )
  }
  
  export default ButtonConfirmate

  // {showShipping ? cartCtx.products.map((p) => <ShippingInformation prod={p}/>) : null}