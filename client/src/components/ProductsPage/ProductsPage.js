import React from 'react';
import {useState, useEffect, useContext} from 'react'
import { Card, CardContent, CardMedia, Typography, Button} from "@mui/material";
import Product from './ProductCard'
import { productDataContext } from '../../App';


function ProductsPage() {
    const productData = useContext(productDataContext)
    console.log(useContext(productDataContext))

    return(
        <div>
            {productData ? productData.map( (book) => (
                <Product
                book={book}/>
            )): null}
        </div>
    )

};

export default ProductsPage;