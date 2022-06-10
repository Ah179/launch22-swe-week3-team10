import React from 'react';
import {useState, useEffect} from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Box, Snackbar, Alert} from "@mui/material";
import {useLocation} from 'react-router-dom'
import { flexbox } from '@mui/system';
import { teal } from '@mui/material/colors';
import { useContext } from 'react';
import {cartContext} from '../../App';

import axios from "axios";
import Product from './ProductCard'
 
function BookPage(props) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const productData = location.state?.book;
    document.title =productData.title
    const [authorBooks, setAuthorBooks] = useState();
    const {cartData, addToCart} = useContext(cartContext)
    document.title = productData.title
    
    useEffect(()=>{
    async function getAuthorsBook()
    { 
    
    axios.post('http://localhost:9000/author', { author: productData.authors});
    const response = axios.get('http://localhost:9000/author');
    const body = await response; 
    setAuthorBooks(body.data.works);
    console.log('body', body);
    }
      getAuthorsBook();
    }, [])
    return(<>
    <div style={{justifyContent: 'center', display: 'flex'}}>
        <div style={{paddingTop: '50px', marginRight: '100px', }}>
            <Box
            height= '500px'
            component ='img'
            alt="Cover not Found"
            src={productData.cover}
            
            
            />

        </div>
        <div style={{paddingTop: '50px', marginLeft: '75px', display: 'flex', flexDirection: 'column', float: 'left', justifyContent: 'left', textAlign: 'left' }}>
            <Typography variant='h2' style={{fontWeight: 'bold', letterSpacing: '3px', float: 'left'}}>{productData.title}</Typography>

            <Typography variant='h3' style={{ letterSpacing: '3px', float: 'left',}}>${productData.price}</Typography>
            <Typography variant='h5' style={{float: 'left', width: '800px', textAlign: 'left', paddingTop: '50px', height: '285px',  overflow: 'hidden', textOverflow: 'ellipsis',}}>{productData.desc}</Typography>
            <Button onClick={()=> {addToCart(productData); setOpen(true)}} variant='contained' sx={{borderRadius: 16, backgroundColor: teal[100], color: 'black', '&:hover': {
    backgroundColor: teal[70],
    boxShadow: 'none',
  },}}> Add To Cart</Button>
        </div>
        <Snackbar open={open} autoHideDuration={4000} onClose={()=>setOpen(false)} >
                <Alert severity='success' sx={{width: '500px', fontSize: 'large'}}>
                    Added {productData.title} to Cart!
                </Alert>
            </Snackbar>
        </div>
        <div style={{justifyContent: 'center'}}>
          {authorBooks ? authorBooks.map( (book) => (
                <Product
                book={book}/>
            )): null}
        </div>
        </>)

}

export default BookPage;