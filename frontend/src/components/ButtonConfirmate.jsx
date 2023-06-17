
import "../styles/buysections.css"
import { Link } from 'react-router-dom'
import CartContext from '../store/cart.context.js'
import { useContext, useEffect, useState } from 'react'
import ShippingInformation from '../pages/ShippingInformation'

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';




const ButtonConfirmate = () => { 

  const cartCtx = useContext(CartContext)
  const [showShipping, setShowShipping] = useState(false)

  const showTheShipping = () => { 
    setShowShipping(true)
  }

  const closeShipping = () => { 
     setShowShipping(false)
  }

  

    return ( 
      <div className='gral-confirmate' style={{marginTop:"2vh"}}>
         <div>
            { showShipping ? null :  <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={() =>  showTheShipping()}> Cordinate Shipping </Button>
              </Stack> }
         </div>

         <div >
             {showShipping ? <ShippingInformation closeShipping={closeShipping} prod={cartCtx.products}/> : null}
         </div>

  </div>
    )
  }
  
  export default ButtonConfirmate

  //  <button className='fin' onClick={() =>  showTheShipping()}>coordinate shipping</button> 

  // {showShipping ? cartCtx.products.map((p) => <ShippingInformation prod={p}/>) : null}