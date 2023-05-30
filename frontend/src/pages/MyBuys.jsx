import React, { useEffect, useState } from 'react'
import StructureMyBuys from '../components/StructureMyBuys'
import { UserContext } from '../store/user.context.js'
import { useContext } from 'react'
import axios from "axios"
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const MyBuys = () => {

    const userCtx = useContext(UserContext);
    const [userId, setUserId] = useState(userCtx.userId);
    const [userBuys, setUserBuys] = useState([])
   
    useEffect(() => {
        setUserId(userCtx.userId);
        console.log(userCtx.userId)
      }, [userCtx.userId])

      function getBuysOfTheUser() { 
       return axios.get(`http://localhost:4000/getBuys/${userId}`)
                   .then((res) =>  { 
                    const purchases = res.data
                    console.log(purchases)
                    return purchases
                   })
                   .catch(err => console.log(err))

      }


      useEffect(() => { 
        getBuysOfTheUser()
                    .then((res) => setUserBuys(res))
                    .catch((err) => console.log(err))
      }, [])

     




  return (
    <div>

        <div>
            <NavBar/>
        </div>
        <div>
            <h4 style={{marginBottom: "1vh", textAlign: "center", fontWeight: "bold"}}>Estas son tus ultimas compras</h4>
        </div>
        {userBuys.map((b) => <StructureMyBuys buys={b}/>)}

        <div>
            <Link to={`/welcome/${userId}`}><p title='ir al inicio'>Volver al Inicio</p></Link>
        </div>
    </div>
  )
}

export default MyBuys
//        <StructureMyBuys buys={userBuys}/>
