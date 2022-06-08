import React from 'react';
import {useState, useEffect} from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Box} from "@mui/material";
import {useLocation} from 'react-router-dom'
import { flexbox } from '@mui/system';
import { teal } from '@mui/material/colors';

function BookPage(props) {
    const location = useLocation();
    const productData = location.state?.book;

    return(<>
    <div style={{justifyContent: 'center', display: 'flex'}}>
        <div style={{paddingTop: '50px', marginRight: '100px', }}>
            <Box
            height= '500px'
            component ='img'
            alt="Cover not Found"
            src={productData.image_url}
            
            
            />

        </div>
        <div style={{paddingTop: '50px', marginLeft: '75px', display: 'flex', flexDirection: 'column', float: 'left', justifyContent: 'left', textAlign: 'left' }}>
            <Typography variant='h2' style={{fontWeight: 'bold', letterSpacing: '3px', float: 'left'}}>{productData.title}</Typography>

            <Typography variant='h3' style={{ letterSpacing: '3px', float: 'left',}}>{productData.price}</Typography>
            <Typography variant='h5' style={{float: 'left', width: '800px', textAlign: 'left', paddingTop: '50px', height: '285px',  overflow: 'hidden', textOverflow: 'ellipsis',}}>{productData.description}</Typography>
            <Button variant='contained' sx={{borderRadius: 16, backgroundColor: teal[100], color: 'black', '&:hover': {
    backgroundColor: teal[70],
    boxShadow: 'none',
  },}}> Add To Cart</Button>
        </div>
        </div>
        </>)

}

export default BookPage;