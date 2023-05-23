import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import StructureDetail from '../components/StructureDetail'


const ViewDetailProduct = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()


   function getProductDetail() { 
    return axios.post(`http://localhost:4000/product/${id}`)
         .then((res) => { 
            const docs = res.data
            console.log(docs)
            return docs
         })
          .catch(err => console.log(err))
   }
 
    useEffect(() => { 
        getProductDetail()
                       .then((res) => setProduct(res))
                       .catch(err => console.log(err))
                     
            
    }, [])



  return (
    <div>
         <StructureDetail product={product}/>
    </div>
  )
}

export default ViewDetailProduct
