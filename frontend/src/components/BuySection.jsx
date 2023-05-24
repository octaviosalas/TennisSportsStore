import React, { useState } from 'react'
import "../styles/buysections.css"
import { useContext } from 'react'
import CartContext from '../store/cart.context.js'
import FinishBuy from './FinishBuy'


const BuySection = ({addToCart}) => {

    const [quantity, setQuantity] = useState(0) //esta cantidad es la que va a recibir mi carrito

    const carritoCtx = useContext(CartContext)

  
    const addOne = () => { 
        setQuantity(quantity + 1)
    }

    const restOne = () => { 
         setQuantity(quantity - 1)
    }


  return (
    <div className='gral-buy'>
    <div className='cont-buy-items'>
      <div className='top-section'>
        <p className='quantity-item'>Cantidad total: {quantity}</p>
      </div>
      
      <div className='bottom-section'>
        <button className='btn-acumulate' onClick={() => addOne()}>+</button>

        <button className='btn-buy' onClick={() => addToCart(quantity)}>Agregar al Carrito</button> 

        <button className='btn-rest' onClick={() => restOne()}>-</button>
      </div>
        {carritoCtx.products.length >= 1 ? <FinishBuy /> : null}
    </div>
   
         
  </div>
  )
}

export default BuySection
