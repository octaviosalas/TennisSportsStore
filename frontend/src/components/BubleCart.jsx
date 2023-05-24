import React from 'react'
import "../styles/buble.css"
import { useContext, useState } from 'react'
import CartContext from '../store/cart.context.js'

const BubleCart = () => {



    const carritoCtx = useContext(CartContext)
    const cant =  carritoCtx.products.length 
    

  return (
    <div>
        {carritoCtx.products.length >= 1 ? <button className='buble-item'>{cant}</button> : null}
         
    </div>
  )
}

export default BubleCart
