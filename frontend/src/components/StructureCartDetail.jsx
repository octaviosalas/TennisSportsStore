import "../styles/structurecartdetail.css"
import {Link} from "react-router-dom"
import { useContext } from 'react'
import CartContext from '../store/cart.context.js'
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


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

const StructureCartDetail = ({productsToBuy}) => {

    const crtCtx = useContext(CartContext) 

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

  return (

    <div style={{display:"flex"}}>

<Card sx={{ maxWidth: 345, height:"65vh", width:"40vh",  marginTop:"2vh", marginLeft:"2vh" }}>
    <CardHeader
      avatar={ <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> R</Avatar> }
      action={<IconButton aria-label="settings"> <MoreVertIcon /> </IconButton>}
      title={productsToBuy.name}
      subheader={"Quantity:" + productsToBuy.quantity}/>
    <CardMedia component="img" height="194"  image={productsToBuy.img[0]}  style={{height: "60%", width: "60%", objectFit: "contain", marginLeft:"8vh"}}/>
    <CardContent>
      <Typography variant="body2" color="text.secondary">Price Unity: {productsToBuy.price} ARS</Typography>
    </CardContent>
    <CardContent>
      <Typography variant="body2" color="text.secondary">Total: {productsToBuy.price * productsToBuy.quantity}</Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites"> <Stack direction="row" spacing={2}><Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => crtCtx.deleteProduct(productsToBuy.id)} style={{marginBottom:"4vh"}}> Delete </Button> </Stack></IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      
    </Collapse>
  </Card>

    </div>
    
    
              
  
 
  
    
  )
}

export default StructureCartDetail

