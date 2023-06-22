import { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from "axios"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import WIthOutOpinionsModal from "./WIthOutOpinionsModal"


const PruebaOpinions = ({ productId }) => {

    const [show, setShow] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [withOutReviews, setWithOutReviews] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    console.log(productId)

    const getProductOpinions = () => {
          axios.get(`http://localhost:4000/getReviews/${productId}`)
             .then((res) => {
          if (res.data.length !== 0) {
                 setReviews(res.data);
                 setIsLoading(false);
                 console.log(res.data)
          } else {
            console.log("No hay reseñas");
      
          }
        })
        .catch((err) => console.log(err));
    };
  

  
    const handleClose = () => { 
        setShow(false)
    };
    const handleShow = () => { 
        setShow(true);
    } 

    console.log(productId)

    useEffect(() =>{ 
        getProductOpinions()
    }, [])
  
    
   
  
    const closeModal = () => {
      setWithOutReviews(false);
    };
  
    return (
      <div>
        <>
          <p variant="primary" onClick={handleShow} style={{color:"black", textDecoration:"underline", cursor:"pointer", fontSize:"1.4vh"}}> Know Opinions about the Product </p>
  
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Product Opinions</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {isLoading ? (
                <p style={{color:"black", fontSize:"1vh"}}>There are no opinions for this product at the moment.</p>
              ) : (
                <>


                  {withOutReviews ? ( <p style={{color:"black", fontSize:"1vh"}} > There are no opinions for this product at the moment.</p> ) 
                  : 
                  (
                    reviews.map((rev) => (
                      <List
                        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                      >
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" />
                          </ListItemAvatar>
                          <ListItemText
                            primary={rev.name}
                            secondary={
                              <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                </Typography>
                                {rev.review}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </List>
                    ))
                  )}
                </>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </div>
    );
  };
  
  export default PruebaOpinions;