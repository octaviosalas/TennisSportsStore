import React, { useState } from 'react'
import "../styles/buysections.css"
import CartContext from '../store/cart.context.js'
import { useContext } from 'react'

const BuySection = () => {

    const [quantity, setQuantity] = useState(0)

    const addOne = () => { 
        setQuantity(quantity + 1)
    }

    const restOne = () => { 
         setQuantity(quantity - 1)
    }

   // const cartContext = useContext(CartContext)

    /*const addToCart = (prod) => { 
        cartContext.addProduct(prod)
        console.log(cartContext.products)
    }*/

  return (
    <div className='gral-buy'>
    <div className='cont-buy-items'>
      <div className='top-section'>
        <p className='quantity-item'>Cantidad total: {quantity}</p>
      </div>
      
      <div className='bottom-section'>
        <button className='btn-acumulate' onClick={() => addOne()}>+</button>
        <button className='btn-buy' >Agregar al Carrito</button>
        <button className='btn-rest' onClick={() => restOne()}>-</button>
      </div>
    </div>
  </div>
  )
}

export default BuySection
