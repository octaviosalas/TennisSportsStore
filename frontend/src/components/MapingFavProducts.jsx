import React from 'react'
import StructureProducts from './StructureProducts'
import "../styles/structureproducts.css"

const MapingFavProducts = ({pro}) => {
  return (



    <div className='map-div'>
         {pro.map((p) => <StructureProducts prod={p}/>)}
    </div>
    

  )
}

export default MapingFavProducts
