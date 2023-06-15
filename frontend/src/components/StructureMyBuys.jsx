
import "../styles/mybuys.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../store/user.context.js'
import { useState, useEffect } from 'react';
import ReviewProducts from './ReviewProducts';
import "../styles/mybuys.css"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



const StructureMyBuys = ({ buys }) => {

  const userCtx = useContext(UserContext);
  const [userId, setUserId] = useState(userCtx.userId);
  const [showReview, setShowReview] = useState(false);

  
  useEffect(() => {
    setUserId(userCtx.userId);
    console.log(userCtx.userId)
  }, [userCtx.userId])

  useEffect(() => { 
      
  }, [])

  const showReviewComponent = () => {
    setShowReview(true);
  };

  const dontShowReviewComponent = () => {
    setShowReview(false);
  };


  return (
    <div className='container-buy'>
     
     <Paper sx={{p: 2, margin:'auto',maxWidth: 500, width:"100vh", flexGrow: 1, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
      <Grid container spacing={2}>

        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={buys.img} style={{height:"30vh", width:"40vh"}}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs> <Typography gutterBottom variant="subtitle1" component="div" style={{marginLeft:"3vh"}}> <b>{buys.name}</b> </Typography>
              <Typography variant="body2" gutterBottom> Quantity: {buys.quantity} items </Typography>
          
            </Grid>
               <Grid item><Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => showReviewComponent()}> Review this product </Typography></Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div"> {buys.price} ARS </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <div className='review-component'>
         {showReview && <ReviewProducts idproduct={buys.id}/>}
         {showReview ? <p style={{cursor: "pointer"}} onClick={() => dontShowReviewComponent()}>Close </p> : null}
      </div>

    </div>
  );
};


export default StructureMyBuys;


/*<div  className='title-container'>
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
*/