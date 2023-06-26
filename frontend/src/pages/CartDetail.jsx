import React, {useContext, useEffect, useState} from 'react'
import CartContext from '../store/cart.context.js'
import StructureCartDetail from '../components/StructureCartDetail'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import NavBar from './NavBar.jsx'
import "../styles/structurecartdetail.css"
import PruebaShippingInformation from './PruebaShippingInformation.jsx'
import Spinner from 'react-bootstrap/Spinner';

const CartDetail = () => {

  const cartCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)
  const [load, setLoad] = useState(true)

  const [id, setId] = useState(userCtx.userId);

   const loadingShip = () => { 
    setTimeout(() => { 
        setLoad(false)
    }, 1000)
   }

  useEffect(() => {
    setId(userCtx.userId);
  }, [userCtx.userId]);

  useEffect(() => { 
    loadingShip()
  }, [])

  
  console.log(cartCtx.products)
  
  
  return (


    <div className='gral-cart-detail'> 
        <NavBar />
            <div >
                
  
            {cartCtx.products.length === 0 ? 
                  <>
                      <p>There are no products in the cart</p>
                      <Link to={`/welcome/${id}`}> <p>Back home</p></Link>
                  </>
                   : 
        load ? <Spinner  animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
                   : 
                   <>
                      <div style={{display:"flex"}}>
                           {cartCtx.products.map((p) => <StructureCartDetail productsToBuy={p} />)}
                       </div>
                          <PruebaShippingInformation cartProducts={cartCtx.products} />
                   </>     
      }
    </div>
  </div>
    

  )
}

export default CartDetail
