import React from 'react'
import "../styles/shipping.css"
import CartContext from '../store/cart.context.js'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../store/user.context.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShippingInformation = ({prod}) => {
    console.log(prod)
    const cartctx = useContext(CartContext)
    const userCtx = useContext(UserContext)

    const [id, setId] = useState(userCtx.userId);

    useEffect(() => {
      setId(userCtx.userId);
    }, [userCtx.userId]);

    useEffect(() => { 
      console.log(cartctx.products);
    }, [])

    const total = cartctx.totalPriceCart
    console.log(total)

    const confirmBuy = () => { 
    
        const docs = cartctx.products;
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
    <div className="container">
      <div className="header">
        <h3>Como queres recibir tu compra?</h3>
       
      </div>

      <div className="container-rigth-left">
        <div className="left-section">
          <label htmlFor="" className="label-text">Direccion de Envio</label>
          <br />
          <input type="text" className="input-field" placeholder='Direccion' />

          <label htmlFor="" className="label-text">Provincia</label>
          <input type="text" className="input-field" placeholder='Provincia' />

          <label htmlFor="" className="label-text">Localidad</label>
          <input type="text" className="input-field" placeholder='localidad' />

          <label htmlFor="" className="label-text">Telefono</label>
          <input type="text" className="input-field" placeholder='telefono' />

          <p style={{fontSize: "12px"}}>Total a Pagar: {total}</p>
          <button onClick={() => confirmBuy()} className='go-buy'>Go Buy</button>
        </div>

        <div className="right-section">
          {prod.map((prod) => (
            <div key={prod.id}>
              <div className="div-img-shipping">
                <img src={prod.img} alt="" className="shipping-img" />
              </div>

              <div className="div-shipping-some">
                <p className="prod-name-shipping">{prod.name}</p>
                <p className="prod-price-shipping">{prod.price}</p>
         
              </div>
            </div>
            
          ))}
    
        </div>
      </div>   
      <Link to={"/rackets"}><p>Back Home</p></Link>
    </div>
  );

}

export default ShippingInformation
