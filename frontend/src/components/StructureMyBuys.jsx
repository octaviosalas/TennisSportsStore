import React from 'react'
import "../styles/mybuys.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../store/user.context.js'
import { useState, useEffect } from 'react';


const StructureMyBuys = ({ buys }) => {

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);

  
  useEffect(() => {
    setUserId(userCtx.userId);
    console.log(userCtx.userId)
  }, [userCtx.userId])

  return (
    <div className='container-buy'>
      <div  className='title-container'>
       <Link to={`/viewdetail/${buys.id}`} className='lnk'> <h3 className='title'><b>{buys.name}</b></h3> </Link>
       <Link to={`/${buys.category}`} className='lnk'><b className='category'>{buys.category}</b></Link> 
      </div>
      <p  className='price'>You spent: {buys.price} ARS</p>
      <p className='quantity'>You Bought {buys.quantity} items</p>

      <div>
         <Link to={`/review/${userId}`}  className='lnk'><a className='opinion' title='leave an opinion'>Review this product</a></Link> 
      </div>
    </div>
  );
};


export default StructureMyBuys;


