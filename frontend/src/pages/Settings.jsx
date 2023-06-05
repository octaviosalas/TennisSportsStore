import React from 'react'
import NavBar from './NavBar'
import "../styles/settings.css"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import pngname from "../img/name.png"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Settings = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [lastPassword, setLastPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showConfig, setShowConfig] = useState(true)

      
   const changeUserData = () => { 
      const newUserData = ( { 
        email: email, 
        lastPassword: lastPassword,
        newPassword: newPassword
      })
      axios.put("http://localhost:4000/changeUserData", newUserData)
           .then((res) => { 
            console.log(res.data)
            setShowConfig(false)
            setTimeout(() => { 
                navigate("/login")
            }, 1800)
               
           })
           .catch((err) => { 
            console.log(err)
            alert("La contraseña esta mal")
           })
   }
   
  return (
    <div>
      <NavBar/> 
      <h1 className='tittle'>In this section you can modify your access data</h1>
        <div className="formContainer">  
        
           { showConfig ?  ( 
            
              <div>
              

                <h3>Change or Dates</h3>
  
                   <form >

                      <div className="inputContainer">
                         <div className="left">
                            <label htmlFor="correo">Email </label>
                               <input name="correo" id="correo" type="email" placeholder="Email..."  autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                         </div>
                               <img src={pngemail} alt="" />
                     </div>

                     <div className="inputContainer">
                        <div className="left">
                          <label htmlFor="contraseña">Last Password</label>
                             <input name="contraseña" id="contraseña" type="password" placeholder="Last Password..." autoComplete="off" value={lastPassword} onChange={(e) => setLastPassword(e.target.value)} />
                        </div>
                             <img src={pngpassword} alt="" />
                     </div>

                    <div className="inputContainer">
                        <div className="left">
                           <label htmlFor="contraseña">New Password</label>
                             <input name="contraseña" id="contraseña" type="password" placeholder="New Password..." autoComplete="off"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                       </div>
                            <img src={pngpassword} alt="" />
                    </div>

                        <button type='button' className='btn' onClick={() => changeUserData()}> Save Changes</button>

                </form>
            </div>
           ) : (   <p> Your password has been changed correctly 😉✔</p>  )}

        
            
    
  </div>


    </div>
       
   
  
  );
}

export default Settings
