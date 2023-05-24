import React from 'react'
import "../styles/login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"



const Login = ({}) => {
   
     
   
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad ] = useState(false)

   


   function tryToLogin() { 

        const infoUser =  { 
            email: email,
            password: password
        }
        axios.post("http://localhost:4000/login", infoUser)
             .then(({data}) => {                               //la res de la promesa va en {} por que es una respuesta en json. A la cual accedo con "data".
                console.log(data)
                setLoad(true)
                setTimeout(() => { 
                    navigate(`/welcome/${data?.user.id}`)      //como mi ruta devuelve un json llamado user que tiene "id" y "name", y a ese json accedo con "data". Le digo que me enlace el "data.user.id" a la ruta welcome.
                },1000)
             })
             .catch((err) => alert(err))
    } 

  return (
    <>
          

          <div className="formContainer">

            <h3>Bienvenido </h3>
            <h2>Inicia Sesion para ir a comprar!</h2>

            <form >

              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="correo">Correo</label>
                  <input name="correo" id="correo" type="email" placeholder="Correo..." value={email}  autoComplete="off"  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <img src={pngemail} alt="" />
              </div>


    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="contraseña">Contraseña</label>
                  <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña..." value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                </div>
                 <img src={pngpassword} alt="" />
              </div>


    
              <button type='button' onClick={() => tryToLogin()} >{load ? "Ingresando" : "Iniciar Sesion"} </button>

              <p className='recupere'>
                Has olvidado tu contraseña?{" "}
               <Link to={"/login"} ><b>Recuperar Contraseña</b></Link>
              </p>

            </form> 
            
          </div>
         
        </>
  )
}

export default Login
