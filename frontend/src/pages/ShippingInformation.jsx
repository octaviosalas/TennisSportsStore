import React from 'react'
import "../styles/shipping.css"
import CartContext from '../store/cart.context.js'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../store/user.context.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShippingInformation = ({prod, closeShipping}) => {
  
    const cartctx = useContext(CartContext)
    const userCtx = useContext(UserContext)

    const [id, setId] = useState(userCtx.userId);
    const [closeShip, setCloseShip] = useState(false)

    const [adress, setAdress] = useState("")
    const [province, setProvince] = useState("")
    const [location, setLocation] = useState("")
    const [telephone, setTelephone] = useState("")
    const [msjNegative, setMsjNegative] = useState(false)


    useEffect(() => {
      setId(userCtx.userId);
    }, [userCtx.userId]);

    const closeSh = () => { 
      setCloseShip(true)
      closeShipping()
    }
    
    const openSh = () => { 
      setCloseShip(false)
    }

    const total = cartctx.totalPriceCart()
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
              setCloseShip(true) //cierra el componente Shipping
              cartctx.cleanCart() //vacio al carrito de compras
              alert("Compra realizada con exito")
             })
             .catch(err => console.log(err))
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


  return (
    <div className="container">
      
        {closeShip ? 
         <>
          <Link to={"/rackets"}><p className='back-home' title='Back to the Home' >Back Home</p></Link> 
          
         </>  : 
        <>
          <div className="header">
            <h3>Insert shipping information</h3> 
            <p className='close-shipping' onClick={() => closeSh()}>X</p>
        
          </div>

      <div className="container-rigth-left">

    
        
        <div className="left-section">
          <label htmlFor="" className="label-text">Shipping Adress</label>
          <input type="text" className="input-field" placeholder='Adress' value={adress} onChange={(e) => setAdress(e.target.value)} />

          <label htmlFor="" className="label-text">Province</label>
          <input type="text" className="input-field" placeholder='Province' value={province} onChange={(e) => setProvince(e.target.value)}/>

          <label htmlFor="" className="label-text">Location</label>
          <input type="text" className="input-field" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>

          <label htmlFor="" className="label-text">Telephone</label>
          <input type="text" className="input-field" placeholder='Telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>

          <p style={{fontSize: "12px"}}>Total Amount: {total} ARS</p>

          <button onClick={() =>  functionsForSubmit()} className='go-buy'>Go Buy</button>

          <p className='last-dates' onClick={() => getDataOfShipping()}>Use data from my last purchase</p>

          {msjNegative && <p className='data-ship'>Thers not shipping data registered</p>}

        </div>

        <div className="right-section">
          {prod.map((prod) => (
            <div key={prod.id}>
              <div className="div-img-shipping">
                <img src={prod.img} alt="" className="shipping-img" />
              </div>

              <div className="div-shipping-some">
                <p className="prod-name-shipping">{prod.name}</p>
                <p className="prod-quantity-shipping">{prod.quantity} unit</p>
                <p className="prod-price-shipping">{prod.price} ARS</p>
         
              </div>
            </div>
            
          ))}
            
       
          
    
        </div>
      </div>   
    
        
        </>
        
        }
      

    </div>
  );

}

export default ShippingInformation
