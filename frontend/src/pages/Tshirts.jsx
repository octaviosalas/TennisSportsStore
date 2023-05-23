import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureProducts from '../components/StructureProducts'
import NavBar from './NavBar'

const Tshirts = () => {

    const [ts, setTs] = useState([])

   function getTshirts() { 
    return axios.get("http://localhost:4000/tshirts")
         .then((res) => { 
            const docs = res.data
            const onlyTshirts = docs.filter(prod => prod.category === "tshirts")
            return onlyTshirts
         })
         .catch(err => console.log(err))

   }
  
   useEffect(() => { 
        getTshirts()
                  .then((res) =>setTs(res) )
                  .catch(err => console.log(err))
   }, [])



  return (
    <div>

        <div>
            <NavBar />
        </div>

        <div>
          <StructureProducts prod={ts}/>
        </div>
     
    </div>
  )
}

export default Tshirts
