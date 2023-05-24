import React, {useContext, useEffect, useState} from 'react'
import CartContext from '../store/cart.context.js'
import StructureCartDetail from '../components/StructureCartDetail'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import NavBar from './NavBar.jsx'

const CartDetail = () => {

  const cartCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)

  const [id, setId] = useState(userCtx.userId);
  
  useEffect(() => {
    setId(userCtx.userId);
  }, [userCtx.userId]);



  return (
    <div>
      <NavBar />

       {cartCtx.products.length >= 1 ? cartCtx.products.map((p) => <StructureCartDetail productsToBuy={p}/>) 
       :
        <>
         <p>No hay productos en el carrito</p>
         <br />
         <Link to={`/welcome/${id}`}><p>Volver al inicio</p></Link>
        </>
       }
       
      

    </div>
  )
}

export default CartDetail
