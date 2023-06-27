import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios"

const ModalOpinion = ({name, review, punctuation, userId, idproduct, onClose }) => {
 
    const sendOpinion = () => { 
        const myOpinion = { 
          name: name, 
          punctuation: punctuation,
          review: review,
          userId: userId,
          productId: idproduct //el id del producto que recibe la opinion es el ID que me llega por props. Osea, el ID del producto que seleccione

        }
        axios.post("http://localhost:4000/saveReview", myOpinion)  
             .then((res) => { 
              window.location.reload()
             })
             .catch((err) => { 
               console.log(err)
             })       
     }

    const closeModalAndSendReview = () => { 
        onClose()
        sendOpinion()
     }

  return ( 
      <Modal show={true} onHide={onClose} style={{marginTop:"4.2vh"}}>
      <Modal.Header closeButton onClick={() => onClose()} style={{textAlign:"center"}}>
        <Modal.Title style={{color:"#ee644c"}}>Please, check your Opinion! </Modal.Title>
      </Modal.Header>
      <Modal.Body> Are you sure about your opinion about the product? Keep in mind that other users will see it?  </Modal.Body>
      <Modal.Body>
            <Button className='definitive-confirm' onClick={() => closeModalAndSendReview()} style={{color:"black", background:"lightblue", boder:"lightblue", width: "20vh", margin:"1vh"}} >Im Sure</Button>
            <Button className='definitive-confirm' onClick={() => onClose()} style={{color:"black", background:"lightblue", boder:"lightblue", width: "20vh",  margin:"1vh"}} >Im Not Sure</Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalOpinion;

