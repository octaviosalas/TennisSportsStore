import React from 'react'

const StructureDetail = ({product}) => {
  return (
    <div>
         <div>
               <div>
                    <img src={product.img} alt="" />
               </div>

               <div>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
               </div>
         </div>
    </div>
  )
}

export default StructureDetail
