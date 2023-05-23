import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


const ViewDetailProduct = () => {

   const {id} = useParams()
   console.log(id)


    useEffect(() => { 
       axios.post(`http://localhost:4000/product/${id}`)
            .then((res) => { 
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [ id])



  return (
    <div>
         aa
    </div>
  )
}

export default ViewDetailProduct
