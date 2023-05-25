import React from 'react'
import StructureProducts from './StructureProducts'
import "../styles/structureproducts.css"

const MapingProducts = ({prod}) => {
  return (
    <div className='map-div'> 
         {prod.map((p) =>  <StructureProducts prod={p}/>)}
    </div>
  )
}

export default MapingProducts
