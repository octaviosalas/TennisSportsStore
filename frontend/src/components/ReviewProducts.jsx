import React from "react"
import { useContext } from "react"
import "../styles/review.css"
import { useEffect, useState } from 'react'
import { UserContext } from '../store/user.context.js'
import axios from 'axios'
import ModalOpinion from './ModalOpinion'







const ReviewProducts = ({idproduct}) => {

      const userCtx = useContext(UserContext) 


      const [punctuation, setPunctuation] = useState("")
      const [review, setReview] = useState("")
      const [userId, setUserId] = useState(userCtx.userId);
      const [name, setName] = useState("")
      const [showModal, setShowModal] = useState(true)

    useEffect(() => {
        setUserId(userCtx.userId);
      }, [userCtx.userId]);
    
    useEffect(() => { 
        axios.get(`http://localhost:4000/user/${userId}`)   
             .then(({data}) =>{ 
              console.log(data)
              setName(data.name)
              setUserId(data._id) //el valor de userId ahora vale el valor del _id de la base de datos. El verdadero ID del usuario
              userCtx.updateUser(userId)
             }) 
             .catch(err => console.log(err))
            
     }, [])

     const onInputNumber = (e) => { 
        const inputValue = e.target.value;
        if (inputValue > 10) {
          e.target.value = 10;
        }
     }

     const showModalNow = () => { 
       setShowModal(false)
     }

     const dontShowModalNow = () => { 
      setShowModal(true)
    }
    

     return (

        <>

       
         <div className="container-review">
        <h2>Send your review</h2>
        <form className='form-review'>
        <input type="text" id="username" className='input-review' value={name} onChange={(e) => setName(e.target.value)}/>
        
        <label className="label-review" htmlFor="rating">
         Puntuación del producto:
        </label>
        <input type="Number" className="input-review" id="rating" min="1" max="10" value={punctuation} onChange={(e) => setPunctuation(e.target.value)} onInput={(e) => onInputNumber(e)}/>
        
        <label htmlFor="comment" className='label-review'>Opinión:</label>
        <textarea id="comment" placeholder="Escriba su opinión aquí" required value={review} onChange={(e) => setReview(e.target.value)}></textarea>
        
     { showModal ?  <button type="submit"  onClick={() => showModalNow()}>Send Review</button> : <ModalOpinion name={name} review={review} punctuation={punctuation} userId={userId} idproduct={idproduct} onClose={dontShowModalNow}/>}
      </form>
    </div>
        
        </>
   
  );
}

export default ReviewProducts
