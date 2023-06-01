import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/buble.css"
import axios from 'axios'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { UserContext } from '../store/user.context.js'

const Welcome = () => {

    const {id} = useParams()
    const userCtx = useContext(UserContext)
    const [name, setName] = useState("")
    const [userId, setUserId] = useState(id);
  
    
    
   useEffect(() => { 
      axios.get(`http://localhost:4000/user/${id}`)   
           .then(({data}) =>{ 
            setName(data.name)
            userCtx.updateUser(id)
           }) 
           .catch(err => console.log(err))
          
   }, [])

   
  useEffect(() => { 
    setUserId(userCtx.userId);
    console.log(userCtx.userId)
  }, [userCtx.userId])

  return (
    <div className='welcome'>
          <NavBar />
      <div>
           <h4>Welcome {name}!</h4>
           <p>You have successfully created your account. You can start looking at our products and buy what you want!!</p>
      </div>


        
    </div>
  )
}

export default Welcome
