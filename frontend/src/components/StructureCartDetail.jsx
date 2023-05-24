import React from 'react'
import "../styles/structurecartdetail.css"
import {Link} from "react-router-dom"
import { useContext } from 'react'
import CartContext from '../store/cart.context.js'

const StructureCartDetail = ({productsToBuy}) => {

    const crtCtx = useContext(CartContext) 

  return (

    <>
    
    <div>
      <div className='title-conteiner'>
              <table className='tabla'>
                  <tr className='tr-item'>

                      <th className='seccion'>Product</th>
                      <th className='seccion'>Image </th>
                      <th className='seccion'>Price</th>
                      <th className='seccion'>Quantity</th>
                      <th className='seccion'>Total</th>
                  </tr>
      
                  <tr className='tr-detail'>
                     <td className='remera-dato'>{productsToBuy.name}</td>
                     <td className='remera-dato'><img src={productsToBuy.img}  alt={productsToBuy.name} className='img-reme'></img></td>
                     <td className='remera-dato'>{productsToBuy.price} ARS</td>
                     <td className='remera-dato'>{productsToBuy.quantity}</td>
                     <td className='remera-dato'>{productsToBuy.price * productsToBuy.quantity}</td>
                     <button className='btn-eliminar' title='Eliminar' onClick={() => crtCtx.deleteProduct(productsToBuy.id)}>X</button>
                  </tr>
              </table>
    </div>
    </div>

    </>
    
  )
}

export default StructureCartDetail
