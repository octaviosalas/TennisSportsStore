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
    const docs = cartCtx.products;
  })

  const saveBuyInDb = () => { 
    const docs = cartCtx.products;
    console.log(docs)

      axios.post(`http://localhost:4000/buy/${id}`, docs, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
         .then((res) => { 
          console.log(res.data)

         })
         .catch(err => console.log(err))
  }


  
  
  return (
    <div className='gral-cart-detail'>
      
      <NavBar />
   
          {cartCtx.products.map((p) => <StructureCartDetail productsToBuy={p}/>)}
   
     
       {cartCtx.products.length !== 0 ? <ButtonConfirmate sendBuy={saveBuyInDb}/>
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
