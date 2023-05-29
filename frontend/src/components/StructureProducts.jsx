import React from 'react'
import "../styles/structureproducts.css"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import fav from "../img/favoritos.png"
import axios from 'axios'
import { UserContext } from '../store/user.context'


const StructureProducts = ({prod}) => {

  const carritoCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)

  const [userId, setUserId] = useState(userCtx.userId);

  useEffect(() => {
    setUserId(userCtx.userId);
    console.log(userId)
  }, [userCtx.userId]);

   const addToCartUser = (prod) => { 
     carritoCtx.addProduct({quantity: 1, ...prod}) //al producto que recibe mi carrito, le agrego su cantidad
   } 


   function markAsFavourite(id) { 
    return axios.put(`http://localhost:4000/favourite`,{ id: id, userId: userId }).then(res => console.log(res.data))
                .catch(err => console.log(err))
   }

   

  
  return (
    <div className='prod-cont-gral'> 
      
        <div className='cart-prod'>
                 <div className='conteiner-img'>
                  <div className='cont-sec'>
                       <h5 className='title-prod'>{prod.name}</h5>
                    <img src={fav} className='fav-img' title='agregar a favoritos' onClick={() => markAsFavourite(prod.id)}></img>
                  </div>
                       
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








