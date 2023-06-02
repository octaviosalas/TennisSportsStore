import React, { useEffect, useState } from 'react'
import axios from "axios"
import StructureDetail from '../components/StructureDetail'
import { useParams } from 'react-router-dom'
import StructureOferts from '../components/StructureOferts'
import StructureOfertsDeatil from '../components/StructureOfertsDeatil'


const ViewDetailOfert = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})


    function getOfertDeatil() { 
        return axios.post(`http://localhost:4000/oferts/${id}`)
             .then((res) => { 
                const docs = res.data
                console.log(docs)
                return docs
             })
              .catch(err => console.log(err))
       }

       useEffect(() => { 
        getOfertDeatil()
                       .then((res) => setProduct(res))
                       .catch(err => console.log(err))
                     
            
    }, [])

  return (
    <div>
        <StructureOfertsDeatil product={product}/>
    </div>
  )
}

export default ViewDetailOfert
