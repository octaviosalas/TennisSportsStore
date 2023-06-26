
import "../styles/structureproducts.css"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart.context.js'
import fav from "../img/favoritos.png"
import axios from 'axios'
import { UserContext } from '../store/user.context'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';



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
  console.log(prod)

  const [expanded, setExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleExpandClick = (cardId) => {
    setExpanded((prevState) => !prevState); 
  };

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

  


  return (
    <div className='prod-cont-gral' style={{marginTop:"12vh"}}> 
    <Card sx={{ width: "34vh" }}>
      <CardHeader  avatar={  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> R </Avatar> } action={ <IconButton aria-label="settings"> <MoreVertIcon /> </IconButton>} title={prod.name} subheader={prod.brand}/>
      <CardMedia component="img" height="194" image={prod.img[0]} alt="Paella dish"  style={{ objectFit: "contain"}}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <Grid container justifyContent="center">
             <Grid item>
                 {prod.price} ARS
             </Grid>
           </Grid>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <Grid container justifyContent="center">
             <Grid item>
                 <Button sx={{ fontSize: "3vh" }} onClick={() => addToCartUser(prod)}>+</Button>
             </Grid>
           </Grid>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <Grid container justifyContent="center">
             <Grid item>
                <Link to={`/viewDetail/${prod.id}`}><p style={{color:"black", textDecoration:"underline", fontSize:"1.2vh"}}>View Product Deatil</p></Link>
             </Grid>
           </Grid>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => markAsFavourite(prod.id)}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <FavoriteIcon color={isHovered ? "warning" : "default"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
          This T-shirt offers both comfort and style. It features our iconic logo on the front, adding a touch of authenticity to
           your outfit. With its versatile design and relaxed fit, this T-shirt is perfect for casual everyday wear or for layering
            with your favorite jackets and sweaters. Available in a range of color.
          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
    </div  > 
  );
}


export default StructureProducts



