import React from 'react';
import "./Cart.css";
import { useContext } from 'react';
import {cartContext} from '../App';
import { Button, Typography } from '@mui/material';

function Cart({ cart, setCart, handleChange }) {
  const {cartData, addToCart} = useContext(cartContext)
  
    return (
      
        <article>
        <div className="cart_box" >
          <div className="cart_img">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e213839-db48-4510-91c0-2e05eca3c6bd/air-force-1-07-lv8-mens-shoes-1BSQGs.png" alt="" />
            <p>Nike Air Force 1</p>
          </div>
          <div>
            <Button variant="outlined">-</Button>
            <Button variant="contained">3</Button>
            <Button variant="outlined">+</Button>
          </div>
          <div>
           <Button margin="2px" variant="text" color="success">$100</Button>
            <Button variant="outlined" color="error">Remove</Button>
          </div>
        </div>
        <div className="total">
        <span>Total Price of your Cart</span>
        <span>$ - $300</span>
      </div>
        </article>
        
    );
}


export default Cart;