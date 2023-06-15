
import "../styles/productopinions.css"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';





const ProductsOpinions = ({ reviews }) => {
    
    
    return (

      reviews.map((opinion) => ( 
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar> <Avatar alt="Remy Sharp" /> </ListItemAvatar>
          <ListItemText primary={opinion.name} secondary={
              <React.Fragment>
                <Typography  sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
      
                </Typography>
                 { opinion.review}
              </React.Fragment>
            } />
        </ListItem>
      </List>
      ))
     
    );
  };
  
  export default ProductsOpinions;

