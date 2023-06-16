import React, {useContext, useEffect, useState} from 'react'
import CartContext from '../store/cart.context.js'
import StructureCartDetail from '../components/StructureCartDetail'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import NavBar from './NavBar.jsx'
import ButtonConfirmate from '../components/ButtonConfirmate.jsx'
import "../styles/structurecartdetail.css"
import axios from 'axios'

const CartDetail = () => {

  const cartCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)

  const [id, setId] = useState(userCtx.userId);

  useEffect(() => {
    setId(userCtx.userId);
  }, [userCtx.userId]);

  useEffect(() => { 
    console.log(cartCtx.products);
  }, [])

 
  
  
  return (
    <div className='gral-cart-detail'>
      
      <NavBar />

      <div style={{display: "flex"}}>
          {cartCtx.products.map((p) => <StructureCartDetail productsToBuy={p}/>)}
      </div>
   
   
     
       {cartCtx.products.length !== 0 ? <ButtonConfirmate />
            :
            <>
              <div>
                <p>There are no products in the cart</p>
                <br />
                <Link to={`/welcome/${id}`}><p>Back home</p></Link>
              </div>
            </>
       }
       
      

    </div>
  )
}

export default CartDetail
