import React from 'react'
import StructureProducts from './StructureProducts'
import "../styles/structureproducts.css"
import StructureFavourites from './StructureFavourites'

const MapingFavProducts = ({pro}) => {
  return (



    <div className='map-div'>
         {pro.map((p) => <StructureFavourites prod={p}/>)}
    </div>
    

  )
}

export default MapingFavProducts
