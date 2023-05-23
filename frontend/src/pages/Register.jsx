import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../styles/register.css"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import pngname from "../img/name.png"


const Register = () => {

    const navigate = useNavigate()

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [message, setMessage] = useState("")
    
     function tryToRegister () { 
        
       
        const newUserToBeRegistered = { 
            name: name,
            email: email, 
            password: password
        }
         axios.post("http://localhost:4000/register", newUserToBeRegistered)
            .then(({data}) => { 
                console.log({data})
                setMessage(data.Mensaje) //data.mensaje seria la respuesta de mi controlador, que tiene un json, con la propiedad mensaje, que devuelve "creado correctamente"
                console.log(message)
                setTimeout(() => { 
                 navigate("/login")
                }, 2500)
            })
               .catch(err => console.log(err))
    }
      
        
  return (

        <>
          

          <div className="formContainer">

            <h3>Bienvenido al E-Commerce</h3>
            <h2>Registrate para comenzar!</h2>

            <form >

              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="nombre">Nombre</label>
                  <input name="nombre" id="nombre" type="text" placeholder="Nombre..." autoComplete="off" value={name} onChange={(e) => setName(e.target.value) }/>
                </div>
                  <img src={pngname} alt="" />
              </div>

    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="correo">Correo</label>
                  <input name="correo" id="correo" type="email" placeholder="Correo..."  autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <img src={pngemail} alt="" />
              </div>


    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="contraseña">Contraseña</label>
                  <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña..." autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                 <img src={pngpassword} alt="" />
              </div>


    
              <button type='button'  onClick={() => tryToRegister()}> Registrarme</button>

              <p>
                Ya tienes una cuenta?{" "}
               <Link to={"/login"}> <b>Inicia Sesión!</b></Link>
              </p>

               <b><p className='user-created'>{message}</p></b>

            </form> 
            
          </div>

         
        </>
      );

}  

export default Register
