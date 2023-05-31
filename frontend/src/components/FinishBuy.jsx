import React from 'react'
import "../styles/buysections.css"
import { Link } from 'react-router-dom'



const FinishBuy = () => {
  return (
    <div>
        <Link to={"/usercart"}> <button className='finish-bbbuy'>Checkout</button> </Link>
    </div>
  )
}

export default FinishBuy
