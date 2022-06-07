import React from 'react';
import {useState, useEffect} from 'react'
import { Card, CardContent, CardMedia, Typography, Button} from "@mui/material";
import Product from './ProductCard'


function ProductsPage() {
    const[productData, setProductData] = useState({
        key: "/subjects/love",
        name: "love",
        subject_type: "subject",
        work_count: 4918,
        works: [
            {
                key: "/works/OL66534W",
                title: "Pride and prejudice",
                edition_count: 752,
                authors: [
                    {
                        name: "Jane Austen",
                        key: "/authors/OL21594A"
                    }
                ],
                image_url: 'https://ia600603.us.archive.org/view_archive.php?archive=/27/items/olcovers649/olcovers649-L.zip&file=6498519-L.jpg',
                has_fulltext: true,
                ia: "mansfieldparknov03aust",
                price: '$25.00'
            },
        ]
    })

    return(
        <div>
            {productData.works.map( (book) => (
                <Product
                onClick={console.log("hello")}
                book={book}/>
            ))}
        </div>
    )

};

export default ProductsPage;