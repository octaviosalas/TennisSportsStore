
import React from 'react'
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CartContext from '../store/cart.context.js'
import { useContext, useEffect } from 'react'
import axios from "axios"
import { UserContext } from '../store/user.context';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const PruebaShippingInformation = ({cartProducts}) => {

    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserContext)
    const total = cartCtx.totalPriceCart()


   const [id, setId] = useState("")
   const [msjNegative, setMsjNegative] = useState(false)
   const [adress, setAdress] = useState("")
   const [province, setProvince] = useState("")
   const [location, setLocation] = useState("")
   const [telephone, setTelephone] = useState("")
   const [isOffCanvasVisible, setIsOffCanvasVisible ] = useState(false)

   useEffect(() => {
    setId(userCtx.userId);
  }, [userCtx.userId]);

  
  const getDataOfShipping = () => { 
    axios.get(`http://localhost:4000/getUserData/${id}`)
         .then((res) => { 
            const docs = res.data
            if(docs.length === 0) { 
              setMsjNegative(true)
            } else { 
              docs.map((d) => { 
                 setAdress(d.adress)
                 setProvince(d.province)
                 setTelephone(d.telephone)
                 setLocation(d.location)
              })
             
            }
           
         })
         .catch(err => { 
             console.log(err)
             console.log("No hay datos")
         })
  }

 


       const saveDataShipping = () => { 
           const userDataShipping = { 
                adress: adress,
                province: province,
                telephone: telephone,
                location: location,
                userid: id
                  }
           axios.post(`http://localhost:4000/saveData/${id}`, userDataShipping)
                .then((res) => {
                       console.log(res.data)
                      })
                .catch((err) => console.log(err))
                }

           const functionsForSubmit = () => { 
             confirmBuy()
             saveDataShipping()
            }


            const confirmBuy = () => { 
                const docs = cartCtx.products;
                console.log(docs)
                  axios.post(`http://localhost:4000/buy/${id}`, docs, {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                     .then((res) => { 
                      console.log(res.data)
                    
                      cartCtx.cleanCart() //vacio al carrito de compras
                      alert("Compra realizada con exito")
                     })
                     .catch(err => console.log(err))
            }
    
  


    function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
   
    const handleClose = () => {
      setIsOffCanvasVisible(false);
    };

    const handleShow = () => {
        setIsOffCanvasVisible(true);
      };

    const handleLinkClick = (e) => {
        e.stopPropagation(); // Evita la propagación del evento de clic
        getDataOfShipping();
      };
      
    // <Button variant="primary" onClick={handleShow} className="me-2" style={{ width: "20vh", height: "3.5vh" }}> Buy </Button>
  
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"2vh" }}>
     
       <Stack direction="row"  spacing={2}>  <Button onClick={handleShow} sx={{background:"#ee644c", color:"white"}} variant="contained" endIcon={<SendIcon />}> Buy </Button> </Stack>
        </div>

      
        <Offcanvas show={isOffCanvasVisible} backdrop="static" {...props} style={{height:"49vh", marginTop:"9.7vh"}}>
             <Offcanvas.Header  closeButton onClick={handleClose}>
                 <Offcanvas.Title style={{fontSize:"1.5vh"}}>Insert the shipping information to finalize the purchase</Offcanvas.Title> 
                
                 </Offcanvas.Header>
          
               <Offcanvas.Body>
                     <Form>
                        <div style={{display:"flex"}}>

                                <div style={{display:"inline-block", width:"65vh", float:"left"}}>
                               
                                    <Row className="mb-3">
                                       <Form.Group as={Col} controlId="formGridEmail">
                                         <Form.Label>Adress</Form.Label>
                                            <Form.Control type="text" placeholder="Adress.." style={{width:"60vh"}}  value={adress} onChange={(e) => setAdress(e.target.value)}/>
                                      </Form.Group>
                                         <br />

                                       <Form.Group as={Col} >
                                          <Form.Label>Province</Form.Label>
                                             <Form.Control type="text" placeholder="Province.." style={{width:"60vh"}}  value={province} onChange={(e) => setProvince(e.target.value)}/>
                                       </Form.Group>
                                   </Row>

                                      <Form.Group className="mb-3" controlId="formGridAddress1">
                                         <Form.Label>Location</Form.Label>
                                            <Form.Control placeholder="Location.." style={{width:"60vh"}}  value={location} onChange={(e) => setLocation(e.target.value)}/>
                                      </Form.Group>

                                      <Form.Group className="mb-3" controlId="formGridAddress2">
                                         <Form.Label>Telephone</Form.Label>
                                           <Form.Control placeholder="Telephone.." style={{width:"60vh"}}  value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                                           <p className='last-dates'  onClick={handleLinkClick} style={{fontSize:"1.2vh", color:"black", cursor:"pointer", marginTop:"1vh", textDecoration:"underline"}}>  Use data from my last purchase  </p>
                                           {msjNegative && <p style={{color:"blue", fontSize:"1.2vh"}}>Nothing Saved</p>}
                                     </Form.Group>
                               </div>

                               <div style={{marginLeft:"15vh", width:"30vh"}}>
                              
                                  {cartProducts.map((prod) => { 
                                    return (
                                      <div key={prod.id} style={{display:"flex", marginTop:"3vh"}}>
                                       <div className="div-img-shipping">
                                         <img src={prod.img[0]} alt="" className="shipping-img" style={{width:"7vh", height:"7vh"}}/>
                               
                                       </div>
                         
                                       <div className="div-shipping-some">
                                         <p className="prod-name-shipping">{prod.name}</p>
                                         <p className="prod-quantity-shipping" style={{fontSize:"1.2vh", color:"black"}}>{prod.quantity} unit</p>
                                         <p className="prod-price-shipping" style={{fontSize:"1.2vh", color:"black"}}>{prod.price} ARS</p>
                                  
                                       </div>
                                     </div>
                                    )
                                       
                                  })}
                               </div>


                           
                               <div style={{float:"right", width:"45vh", margin:"8vh"}}>
                                       <p style={{fontSize: "12px"}}>Total Amount: {total} ARS</p>
                                       <Stack direction="row"  spacing={2}>  <Button onClick={() =>  functionsForSubmit()} sx={{background:"#ee644c", color:"white"}} variant="contained" endIcon={<SendIcon />}> Confirm </Button> </Stack>
                               </div>
                        

                        </div>
                      
                  </Form>
               </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }



    return (
        <>
          {['top'].map((placement, idx) => (
            <OffCanvasExample key={idx} placement={placement} name={placement} />
          ))}
        </>
      );
}

export default PruebaShippingInformation

