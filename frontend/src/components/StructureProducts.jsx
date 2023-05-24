import React from 'react'
import "../styles/structureproducts.css"
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import CartContext from '../store/cart.context.js'


const StructureProducts = ({prod}) => {

  /*const carritoCtx = useContext(CartContext)

      
   const addToCartUser = () => { 
     carritoCtx.addProduct({quantity: 1, ...prod}) //al producto que recibe mi carrito, le agrego su cantidad
   } */

  
  return (
    <div className='prod-cont-gral'> 
      {prod.map((p) => ( 
        <div className='cart-prod'>
                 <div className='conteiner-img'>
                       <h5 className='title-prod'>{p.name}</h5>
                       <br />
                      <img className='img-product' src={p.img} alt="" />
                 </div>
                     <br />
                 <div className='conteiner-price'>
                     <p className='price'>{p.price} ARS</p>
                 </div>

                 <div className='conteiner-detail-prod'>
                  <button className='btn-agreg' title='agregar al carrito'>+</button>
                  <br />
                    <Link to={`/viewDetail/${p.id}`} className='link'><a className='view-detail'>Ver producto en detalle</a></Link>
                 </div>
          </div>
         
    ))}
          
    </div>
  )
}

export default StructureProducts








