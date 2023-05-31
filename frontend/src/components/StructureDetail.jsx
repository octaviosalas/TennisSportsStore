import React, { useState } from 'react'
import "../styles/structuredetail.css"
import BuySection from './BuySection'
import NavBar from "../pages/NavBar"
import SizesShoes from './SizesShoes'
import Sizes from './Sizes'
import { useContext, useEffect } from 'react'
import CartContext from '../store/cart.context.js'
import { Link } from 'react-router-dom'
import axios from "axios"

const StructureDetail = ({product}) => {
     
    const carritoCtx = useContext(CartContext)

    const [dataOpinions, setDataOpinions] = useState([])

      
   const addToCartUser = (quantity) => { 
     carritoCtx.addProduct({quantity: quantity, ...product}) //al producto que recibe mi carrito, le agrego su cantidad
   }

     useEffect(() => { 
          console.log(carritoCtx)
      }, [[carritoCtx.products]])


    const getProductOpinions = () => { 
       axios.get(`http://localhost:4000/getReviews/${product.id}`)
            .then((res) => {
               console.log(res.data)
               setDataOpinions(res.data)
               console.log(dataOpinions)
            }) 
            .catch((err) => console.log(err))
    }



  return (
    <div className='gral-detail-prod'>

     <div>
          <NavBar />
     </div>
         <div className='other-gral-detail-prod'>
               <div className='img-cont-prod'>
                    <img src={product.img} alt="" className='img-prod-detail'/>
               </div>

               <div className='cont-name-price-prod'>
                    <h4 className='name-product'>{product.name}</h4>
                    <p className='pricee-prod'>{product.price} ARS</p>
                    <br />
                    {product.category === "tshirts" ? <Sizes /> : null}
                    {product.category === "shoes" ? <SizesShoes /> : null}
               </div>

               <div>
                   <p className='know-ops' title='Click to know opinions' onClick={() => getProductOpinions(product.id)}>Know Opinions of this product</p>
               </div>
         </div>

         <div className='conteiner-buy-section'>
              <BuySection addToCart={addToCartUser} prod={product}/>
            
         </div>

    </div>
  )
}

export default StructureDetail
