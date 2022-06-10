import { teal } from '@mui/material/colors';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, Snackbar, Alert} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import {cartContext} from '../../App';

const ProductCard = (props) => {
    const {cartData, addToCart} = useContext(cartContext)
    const [open, setOpen] = useState(false);


    return(
        <div>
            <Card variant='elevation' 
            style={{
                display: 'inline-block',
                width: '250px',
                height: '500px',
                margin: 'auto',
                backgroundColor: teal[100],
                float: 'left',
                margin: '20px',
                boxShadow: "0 12px 20px rgba(0,0,0,0.3)"
            }}
            
            sx={{
                ':hover': {
                    boxShadow: 20,
                     // theme.shadows[20]
                  },
                   cursor:  'pointer'
            }}>
                <CardActionArea component={Link} to="/bookpage" state={{book: props.book}} style={{ backgroundColor: teal[100] }}>
            <CardMedia
                height='375'
                component='img'
                image={props.book.cover}
                />               

                    
                    <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', paddingTop: '10px' }}
display='inline' variant='h6'style={{fontWeight: 'bold', }}>
                        {props.book.title}                       
                    </Typography>

                    <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', }}
display='inline' variant='h6'>
                        {props.book.authors[0]}                       
                    </Typography>
                    </CardActionArea>
                    <div style={{float: 'inline-start', marginTop: '10px'}}>
                        <IconButton onClick={() => {
                            addToCart(props.book)
                            setOpen(true)
                            }}  size='large' style={{float: 'left', paddingLeft: '15px', }}><ShoppingCartIcon style={{transform: 'scale(1.2,1.2)', paddingBottom: '80px'}} /></IconButton>
                        <Typography  sx={{display:'inline', float: 'right', fontSize: '1.4rem', paddingRight: '10px'}}>${props.book.price}</Typography>
                    </div>

                
            </Card>
            <Snackbar open={open} autoHideDuration={4000} onClose={()=>setOpen(false)} >
                <Alert severity='success' sx={{width: '500px', fontSize: 'large'}}>
                    Added {props.book.title} to Cart!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ProductCard;