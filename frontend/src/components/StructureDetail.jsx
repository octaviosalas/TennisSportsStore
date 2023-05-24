import React from 'react'
import "../styles/structuredetail.css"
import BuySection from './BuySection'
import NavBar from "../pages/NavBar"
import SizesShoes from './SizesShoes'
import Sizes from './Sizes'

const StructureDetail = ({product}) => {
     console.log(product)

    

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
                    <p className='price-prod'>{product.price} ARS</p>
               </div>
         </div>

         <div className='conteiner-buy-section'>
              <BuySection />
              {product.category === "tshirts" ? <Sizes /> : null}
              {product.category === "shoes" ? <SizesShoes /> : null}
         </div>

    </div>
  )
}

export default StructureDetail
