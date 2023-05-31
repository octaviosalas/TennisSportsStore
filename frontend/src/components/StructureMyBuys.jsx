import React from 'react'
import "../styles/mybuys.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../store/user.context.js'
import { useState, useEffect } from 'react';
import ReviewProducts from './ReviewProducts';
import "../styles/mybuys.css"


const StructureMyBuys = ({ buys }) => {

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);
  const [showReview, setShowReview] = useState(false);

  
  useEffect(() => {
    setUserId(userCtx.userId);
    console.log(userCtx.userId)
  }, [userCtx.userId])

  const showReviewComponent = () => {
    setShowReview(true);
  };

  const dontShowReviewComponent = () => {
    setShowReview(false);
  };


  return (
    <div className='container-buy'>
      <div  className='title-container'>
       <Link to={`/viewdetail/${buys.id}`} className='lnk'> <h3 className='title'><b>{buys.name}</b></h3> </Link>
       <Link to={`/${buys.category}`} className='lnk'><b className='category'>{buys.category}</b></Link> 
      </div>
      <p  className='price'>You spent: {buys.price} ARS</p>
      <p className='quantity'>You Bought {buys.quantity} items</p>

      <div>
         <a className='opinion' title='leave an opinion' onClick={() => showReviewComponent()}>Review this product</a>
      </div>

      <div className='review-component'>
         {showReview && <ReviewProducts idproduct={buys.id}/>}
         {showReview ? <p style={{cursor: "pointer"}} onClick={() => dontShowReviewComponent()}>Close </p> : null}
      </div>

      

    </div>
  );
};


export default StructureMyBuys;


//<Link to={`/review/${userId}`}  className='lnk'><a className='opinion' title='leave an opinion'>Review this product</a></Link> 