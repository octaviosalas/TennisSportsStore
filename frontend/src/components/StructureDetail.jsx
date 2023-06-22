

import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; //importacion de bootstrap
import "../styles/structuredetail.css"
import BuySection from './BuySection'
import NavBar from "../pages/NavBar"
import SizesShoes from './SizesShoes'
import Sizes from './Sizes'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import axios from "axios"

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Carousel from 'react-bootstrap/Carousel';
import WIthOutOpinionsModal from "./WIthOutOpinionsModal"
import PruebaOpinions from "./PruebaOpinions";


const StructureDetail = ({product}) => {
     
    const carritoCtx = useContext(CartContext)
    const {id} = useParams()
    console.log(id)



    const [dataOpinions, setDataOpinions] = useState([])
    const [showOpinions, setShowOpinions] = useState(false)
    const [msjNothing, setMsjNothing] = useState(false)
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")
    const [threeImage, setThreeImage] = useState("")

      
   const addToCartUser = (quantity) => { 
     carritoCtx.addProduct({quantity: quantity, ...product}) //al producto que recibe mi carrito, le agrego su cantidad
   }

     useEffect(() => { 
          console.log(carritoCtx)
      }, [[carritoCtx.products]])

      useEffect(() => { 
          axios.get(`http://localhost:4000/getImages/${id}`)
               .then((res) => { 
                    console.log(res.data)
                    const docs = res.data
                    docs.map((doc) => { 
                               setFirstImage(doc.img[0])
                              setSecondImage(doc.img[1])
                              setThreeImage(doc.img[2])    
                    })
               })
               .catch((err) => { 
                    console.log(err)
               })
      }, [])


  


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
         <div className='other-gral-detail-prod' style={{height:"55vh", width:"35vh"}}>
               <div className='img-cont-prod'>
               <Carousel className='img-item' variant="left">
                    <Carousel.Item style={{height:"29vh"}}> <img className="d-block w-100 imgimg"  src={firstImage}  alt="First slide" style={{height:"24vh"}}/> </Carousel.Item>
                    <Carousel.Item style={{height:"29vh"}}> <img className="d-block w-100 imgimg" src={secondImage} alt="Second slide"  style={{height:"24vh"}}/></Carousel.Item>
                    <Carousel.Item style={{height:"29vh"}}> <img className="d-block w-100 imgimg" src={threeImage} alt="Third slide" style={{height:"24vh"}}/> </Carousel.Item>
                 </Carousel> 
               </div>

               <div className='cont-name-price-prod'>
                    <h4 className='name-product'>{product.name}</h4>
                    <p className='pricee-prod'>{product.price} ARS</p>
                    <br />
                    {product.category === "tshirts" ? <Sizes /> : null}
                    {product.category === "shoes" ? <SizesShoes /> : null}
               </div>

               <div>
               <PruebaOpinions productId={id}/>
               </div>
         </div>

         <div className='conteiner-buy-section'>
              <BuySection addToCart={addToCartUser} prod={product}/>
         </div>

         <div>
             

              
         
     
          
              
         </div>

    </div>
  )
}

export default StructureDetail



/*




import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; //importacion de bootstrap
import "../styles/structuredetail.css"
import BuySection from './BuySection'
import NavBar from "../pages/NavBar"
import SizesShoes from './SizesShoes'
import Sizes from './Sizes'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import axios from "axios"
import ProductsOpinions from '../pages/ProductsOpinions'
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Carousel from 'react-bootstrap/Carousel';
import WIthOutOpinionsModal from "./WIthOutOpinionsModal"
import PruebaOpinions from "./PruebaOpinions";


const StructureDetail = ({product}) => {
     
    const carritoCtx = useContext(CartContext)
    const {id} = useParams()



    const [dataOpinions, setDataOpinions] = useState([])
    const [showOpinions, setShowOpinions] = useState(false)
    const [msjNothing, setMsjNothing] = useState(false)
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")
    const [threeImage, setThreeImage] = useState("")

      
   const addToCartUser = (quantity) => { 
     carritoCtx.addProduct({quantity: quantity, ...product}) //al producto que recibe mi carrito, le agrego su cantidad
   }

     useEffect(() => { 
          console.log(carritoCtx)
      }, [[carritoCtx.products]])

      useEffect(() => { 
          axios.get(`http://localhost:4000/getImages/${id}`)
               .then((res) => { 
                    console.log(res.data)
                    const docs = res.data
                    docs.map((doc) => { 
                               setFirstImage(doc.img[0])
                              setSecondImage(doc.img[1])
                              setThreeImage(doc.img[2])    
                    })
               })
               .catch((err) => { 
                    console.log(err)
               })
      }, [])


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
         <div className='other-gral-detail-prod' style={{height:"55vh", width:"35vh"}}>
               <div className='img-cont-prod'>
               <Carousel className='img-item' variant="left">
                    <Carousel.Item style={{height:"29vh"}}> <img className="d-block w-100 imgimg"  src={firstImage}  alt="First slide" style={{height:"24vh"}}/> </Carousel.Item>
                    <Carousel.Item style={{height:"29vh"}}> <img className="d-block w-100 imgimg" src={secondImage} alt="Second slide"  style={{height:"24vh"}}/></Carousel.Item>
                    <Carousel.Item style={{height:"29vh"}}> <img className="d-block w-100 imgimg" src={threeImage} alt="Third slide" style={{height:"24vh"}}/> </Carousel.Item>
                 </Carousel> 
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

         

              {msjNothing &&   <WIthOutOpinionsModal onClose={closeMsj}/>
              } 
     
          
              
         </div>

    </div>
  )
}

export default StructureDetail */