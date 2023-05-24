import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { UserContext } from '../store/user.context.js'

const Welcome = () => {

    const {id} = useParams()
    const [name, setName] = useState("")
    const userCtx = useContext(UserContext)
    
    

    
   useEffect(() => { 
      axios.get(`http://localhost:4000/user/${id}`)   
           .then(({data}) =>{ 
            setName(data.name)
            userCtx.updateUser(id)
           }) 
           .catch(err => console.log(err))
          
   }, [])

   
  useEffect(() => { 
    console.log(userCtx.userId)
  }, [])

  return (
    <div>
          <NavBar />
      <div>
           <h4>Bienvenido {name}!</h4>
           <p>Has creado tu cuenta con exito. Puedes comenzar a mirar nuestros productos y adquirir lo que quieras!</p>
      </div>


        
    </div>
  )
}

export default Welcome
