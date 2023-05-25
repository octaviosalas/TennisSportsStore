import React from 'react'
import "../styles/structureproducts.css"
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import CartContext from '../store/cart.context.js'


const StructureProducts = ({prod}) => {

  const carritoCtx = useContext(CartContext)

      
   const addToCartUser = (prod) => { 
     carritoCtx.addProduct({quantity: 1, ...prod}) //al producto que recibe mi carrito, le agrego su cantidad
   } 

  
  return (
    <div className='prod-cont-gral'> 
      
        <div className='cart-prod'>
                 <div className='conteiner-img'>
                       <h5 className='title-prod'>{prod.name}</h5>
                       <br />
                      <img className='img-product' src={prod.img} alt="" />
                 </div>
                     <br />
                 <div className='conteiner-price'>
                     <p className='price'>{prod.price} ARS</p>
                 </div>

                 <div className='conteiner-detail-prod'>
                  <button className='btn-agreg' title='agregar al carrito' onClick={() => addToCartUser(prod)}>+</button>
                  <br />
                    <Link to={`/viewDetail/${prod.id}`} className='link'><a className='view-detail'>Ver producto en detalle</a></Link>
                 </div>
          </div>
         
    
          
    </div>
  )
}

export default StructureProducts








