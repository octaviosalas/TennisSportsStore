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
    const [msj, setMsj] = useState(false)
    const [idForImage, setIdForImage] = useState([])
   
    useEffect(() => {
        setUserId(userCtx.userId);
        console.log(userCtx.userId)
      }, [userCtx.userId])


      useEffect(() => { 
                  console.log(idForImage)
      }, [idForImage])

      function getBuysOfTheUser() { 
       return axios.get(`http://localhost:4000/getBuys/${userId}`)
                   .then((res) =>  { 
                    const purchases = res.data
                    if(purchases.length !== 0) { 
                        return purchases
                    } else { 
                        setMsj(true)
                    }
                   })
                   .catch(err => console.log(err))

      }


      useEffect(() => { 
        getBuysOfTheUser()
                    .then((res) => {
                        setUserBuys(res)                  
                    })
                    .catch((err) => console.log(err))
      }, [])

     




  return (
    <div>
            <NavBar/>
        <div>

            {msj ? <>
               <p className='didnt-buy' style={{color:"black"}}>You have not made in-app purchases yet. You can go shopping 😉</p> 
               <Link to={`/rackets`} ><p title='Go Buy'>Go Shopping</p></Link>
                   </>
            

            : 
            <>
            <h4 style={{marginBottom: "1vh", textAlign: "center", fontWeight: "bold"}}>These are your last purchases</h4>
            {userBuys.map((b) => <StructureMyBuys buys={b}/>)}

            <div>
                  <Link to={`/welcome/${userId}`} className='lnk'><p title='ir al inicio'>Back home</p></Link>
            </div>
            
            </>  }
          
        </div>
    

       
    </div>
  )
}

export default MyBuys
//        <StructureMyBuys buys={userBuys}/>
