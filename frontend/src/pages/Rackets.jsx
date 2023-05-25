import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../components/StructureProducts"
import NavBar from './NavBar'
import MapingProducts from '../components/MapingProducts'



const Rackets = () => {

    const [rackets, setRackets] = useState([])

    function getRackets() { 
       return axios.get("http://localhost:4000/rackets")
             .then((res) => { 
                 const docs = res.data;
                 const onlyRackets =  docs.filter(prod => prod.category === "rackets") 
                 return onlyRackets
                })
             .catch(err => console.log(err))
     }

    

     useEffect(() => { 
            getRackets()
            .then((res) => setRackets(res))
            .catch(err => console.log(err))     
                               
     }, [])



  return (
    <div>

        <div>
            <NavBar />
        </div>

        <div>
            <MapingProducts prod={rackets}/>
        </div>
           
    </div>
  )
}

export default Rackets
