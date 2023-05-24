import React, {useContext, useEffect, useState} from 'react'
import CartContext from '../store/cart.context.js'
import StructureCartDetail from '../components/StructureCartDetail'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/user.context.js'
import NavBar from './NavBar.jsx'
import FinishBuy from '../components/FinishBuy.jsx'
import ButtonConfirmate from '../components/ButtonConfirmate.jsx'

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

       {cartCtx.products.map((p) => <StructureCartDetail productsToBuy={p}/>)}
       {cartCtx.products.length !== 0 ? <ButtonConfirmate />
       :
        <>
        <div>
        <p>No hay productos en el carrito</p>
         <br />
         <Link to={`/welcome/${id}`}><p>Volver al inicio</p></Link>
        </div>
      
        </>
       }
       
      

    </div>
  )
}

export default CartDetail
