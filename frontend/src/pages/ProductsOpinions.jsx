import React from 'react'
import "../styles/productopinions.css"
const ProductsOpinions = ({ reviews }) => {
    
    
    return (
      <div className='opinions-container'>
        <div className='opinions-scroll'>
          {reviews.map((opinion) => (
            <div lassName='gral-opinions-div'>
              <div className='div-of-name-pun'>
                <p className='op-name'>Name: <b className='b'>{opinion.name}</b></p>
                <p className='op-score'>Score: <b className='b'>{opinion.punctuation}</b></p>
              </div>
              <div className='div-of-review'>
                <p className='b'> {opinion.review}</p>
               
              </div>
              <hr className='hr-item'/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsOpinions;