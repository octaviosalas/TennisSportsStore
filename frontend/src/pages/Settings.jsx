import React from 'react'
import NavBar from './NavBar'
import "../styles/settings.css"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import pngname from "../img/name.png"

const Settings = () => {
  return (
    <>
    <NavBar/>
        
    <div className="formContainer">

      <h3>Change or Dates</h3>
    
      <form >

       

        <div className="inputContainer">
          <div className="left">
            <label htmlFor="correo">Email </label>
            <input name="correo" id="correo" type="email" placeholder="Email..."  autoComplete="off" />
          </div>
          <img src={pngemail} alt="" />
        </div>

        <div className="inputContainer">
          <div className="left">
            <label htmlFor="contraseña">Last Password</label>
            <input name="contraseña" id="contraseña" type="password" placeholder="Last Password..." autoComplete="off"  />
          </div>
           <img src={pngpassword} alt="" />
        </div>

        <div className="inputContainer">
          <div className="left">
            <label htmlFor="contraseña">New Password</label>
            <input name="contraseña" id="contraseña" type="password" placeholder="New Password..." autoComplete="off"  />
          </div>
           <img src={pngpassword} alt="" />
        </div>

        <button type='button' className='btn'> Save Changes</button>

      </form> 
      
    </div>

   
  </>
  );
}

export default Settings
