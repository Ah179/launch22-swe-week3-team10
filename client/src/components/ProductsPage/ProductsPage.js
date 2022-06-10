import React from 'react';
import {useState, useEffect, useContext, } from 'react'
import { Card, CardContent, CardMedia, Typography, Button} from "@mui/material";
import Product from './ProductCard'
import { productDataContext } from '../../App';
import {cartContext} from '../../App';


function ProductsPage(props) {
    const productData = useContext(productDataContext)
    const {cartData, addToCart} = useContext(cartContext)
    document.title = 'Bookly'

    return(
        <div>
            <br></br>
            <Typography variant='h2'>Best Selling Books</Typography>
            {productData ? productData.map( (book) => (
                <Product
                addToCart={addToCart}
                book={book}/>
            )): null}
        </div>
    )

};

export default ProductsPage;

