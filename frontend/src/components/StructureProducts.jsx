import React from 'react'
import "../styles/structureproducts.css"
import { Link } from 'react-router-dom'

const StructureProducts = ({prod}) => {
  
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
                     <p className='price'>{p.price}ARS</p>
                 </div>

                 <div className='conteiner-detail-prod'>
                    <Link to={`/viewDetail/${p.id}`} className='link'><a className='view-detail'>Ver producto en detalle</a></Link>
                 </div>
          </div>
         
    ))}
          
    </div>
  )
}

export default StructureProducts








