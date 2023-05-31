import React from 'react'
import "../styles/structurefavs.css"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import axios from 'axios'
import { UserContext } from '../store/user.context'
import delet from "../img/delete.png"


const StructureFavourites = ({prod}) => {
   
    const carritoCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)

  const [userId, setUserId] = useState(userCtx.userId);

  useEffect(() => {
    setUserId(userCtx.userId);
    console.log(userId)
  }, [userCtx.userId]);

   const addToCartUser = (product) => { 
     carritoCtx.addProduct({quantity: 1, ...prod}) //al producto que recibe mi carrito, le agrego su cantidad
   } 


  function deleteFavourite(id) { 
    return axios.post(`http://localhost:4000/deleteFavourite`,{ id: id.toString() }).then(res => console.log(res.data))
                .catch(err => console.log(err))
   }



  return (
    <div>
       <div className='prod-cont-gral-faving'> 
      
      <div className='cart-prod'>
               <div className='conteiner-img'>
                <div className='cont-sec'>
                     <h5 className='title-prod'>{prod.name} </h5>
                     <img src={delet} className='fav-img' title='Eliminate of favourites' onClick={() => deleteFavourite(prod.id)}></img>
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
                  <Link to={`/viewDetail/${prod.id}`} className='link'><a className='view-detail'>View product Detail</a></Link>
               </div>
        </div>
       
  
        
  </div>
    </div>
  )
}

export default StructureFavourites
