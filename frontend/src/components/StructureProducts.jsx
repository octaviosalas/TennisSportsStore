
import "../styles/structureproducts.css"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import fav from "../img/favoritos.png"
import axios from 'axios'
import { UserContext } from '../store/user.context'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const StructureProducts = ({prod}) => {

  const carritoCtx = useContext(CartContext)
  const userCtx = useContext(UserContext)

  const [userId, setUserId] = useState(userCtx.userId);

  useEffect(() => {
    setUserId(userCtx.userId);
    console.log(userId)
  }, [userCtx.userId]);

   const addToCartUser = (prod) => { 
     carritoCtx.addProduct({quantity: 1, ...prod}) //al producto que recibe mi carrito, le agrego su cantidad
   } 


   function markAsFavourite(id) { 
    return axios.put(`http://localhost:4000/favourite`,{ id: id, userId: userId }).then(res => console.log(res.data))
                .catch(err => console.log(err))
   }

   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
     setExpanded(!expanded);
   };

  
  return (
    <div className='prod-cont-gral' > 
      
      <Card sx={{ maxWidth: 345, height:"65vh", width:"34vh",  marginTop:"2vh", marginLeft:"2vh"}} >

           <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> {prod.category === "rackets" ? "R" : prod.category === "shoes" ? "S" : prod.category === "tshirts" && "T"}</Avatar>}
               action={<IconButton aria-label="settings" onClick={() => markAsFavourite(prod.id)}> <FavoriteIcon /> </IconButton> } title={prod.name} subheader={prod.brand}/>
               
                 <CardMedia component="img" height="194" image={prod.img[0]} style={{height: "40%", width: "60%", objectFit: "contain", marginLeft:"8vh"}}/>
                   <CardContent>
                      <Typography variant="body2" color="text.secondary">
                            {prod.price} ARS
                      </Typography>
                  </CardContent>

      <CardActions disableSpacing>
                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft:"11vh" }}>
                        <IconButton onClick={() => addToCartUser(prod)}>  <AddIcon /></IconButton>
                        <Link to={{ pathname:`/viewDetail/${prod.id}`, state: { images: prod.img }}}>                               
                            <Typography variant="body2" color="text.secondary" style={{textDecoration:"underline", cursor: "pointer"}}>View product Detail</Typography>
                        </Link>
                   </div>
    
               
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
 
      </Collapse>
    </Card>
         
    
          
    </div>
  )
}

export default StructureProducts






/*    <div className='prod-cont-gral'> 
      
        <div className='cart-prod'>
                 <div className='conteiner-img'>
                  <div className='cont-sec'>
                       <h5 className='title-produ'>{prod.name}</h5>
                    <img src={fav} className='fav-img' title='agregar a favoritos' onClick={() => markAsFavourite(prod.id)}></img>
                  </div>
                       
                       <br />
                      <img className='img-product' src={prod.img} alt="" />
                 </div>
                     <br />
                 <div className='conteiner-price'>
                     <p className='price'>{prod.price} ARS</p>
                 </div>

                 <div className='conteiner-detail-prod'>
                  <button className='btn-agreg' title='agregar al carrito' onClick={() => addToCartUser(prod)}>+</button>
                  <br />

                 </div>
                 <Link to={`/viewDetail/${prod.id}`} className='link-detail'><a className='view-detail'>View product Detail</a></Link>
          </div>
         
    
          
    </div>*/

