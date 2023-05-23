import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureProducts from '../components/StructureProducts'
import NavBar from './NavBar'




const Shoes = () => {

    const [shoes, setShoes ] = useState([])

    function getShoes()  { 
       return axios.get("http://localhost:4000/shoes")
              .then((res) => { 
                const docs = res.data
                const onlyShoes = docs.filter(prod => prod.category === "shoes")
                return onlyShoes
              })
              .catch(err => console.log(err))
    }


     useEffect(() => { 
        getShoes()
                .then((res) => setShoes(res))
                .catch(err => console.log(err))
     }, [])


  return (
    <div>

         <div>
            <NavBar />
        </div>

        <div>
            <StructureProducts prod={shoes}/>
        </div>
      
    </div>
  )
}

export default Shoes
