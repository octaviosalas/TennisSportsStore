
import "../styles/structuredetail.css"
import BuySection from './BuySection'
import NavBar from "../pages/NavBar"
import SizesShoes from './SizesShoes'
import Sizes from './Sizes'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import { Link } from 'react-router-dom'
import axios from "axios"
import ProductsOpinions from '../pages/ProductsOpinions'

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const StructureDetail = ({product}) => {
     
    const carritoCtx = useContext(CartContext)

    const [dataOpinions, setDataOpinions] = useState([])
    const [showOpinions, setShowOpinions] = useState(false)
    const [msjNothing, setMsjNothing] = useState(false)

      
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
                  if(res.data.length !== 0) { 
                    setDataOpinions(res.data)
                    console.log(dataOpinions)
                    setShowOpinions(true)
                  } else { 
                    console.log("No hay reseñas")
                    setMsjNothing(true)
                  }
                    
                               
            }) 
            .catch((err) => console.log(err))
    }

    useEffect(() => {
     console.log(dataOpinions)
  }, [dataOpinions]);

  const closeOpinions = () => { 
     setShowOpinions(false)
  }
  
  const closeMsj = () => { 
     setMsjNothing(false)
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

         <div>
              {showOpinions &&  <ProductsOpinions reviews={dataOpinions}/> } 

              {showOpinions ? <Stack direction="row" spacing={2}> <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => closeOpinions()} style={{marginTop:"1.5vh", color:"black"}}> Close Opinions </Button></Stack> : null}

         

              {msjNothing &&  

               <div className='div-msj-nothing'>
                     <p>There are no reviews for this product so far.</p> 
                     <button className='btn-x' onClick={() => closeMsj()}>X</button>
               </div>

               } 
     
          
              
           
              
         </div>

    </div>
  )
}

export default StructureDetail

