import React from 'react';
import "./Cart.css";
import { useContext, useState, useEffect } from 'react';
import {cartContext} from '../App';
import { Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Cart() {
    
  const {cartData, addToCart, setCartData, removeFromCart, setCounter, counter, increase, decrease, handleChange} = useContext(cartContext)

  const [price, setPrice] = useState(0);

 

  const handleRemove = (isbn) => {
    const arr = cartData.filter((book) => book.isbn !== isbn);
    setCartData(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cartData.map((book) => (ans += book.quantity*book.price));
    setPrice(ans);
  };

  
  const onAdd = (book) => {
    const exist = cartData.find((x) => x.isbn === book.isbn);
    if (exist.quantity === 1) {
      setCartData(
        cartData.map((x) =>
          x.isbn === book.isbn ? { ...exist, qty: exist.quantity + 1 } : x
        )
      );
      handlePrice();
    } else {
      setCartData([...cartData, { ...book, quanity: 1 }]);
      handlePrice();
    }
  };
  const onRemove = (book) => {
    const exist = cartData.find((x) => x.isbn === book.isbn);
    if (exist) {
      setCartData(cartData.filter((x) => x.isbn !== book.isbn));
    } else {
      setCartData(
        cartData.map((x) =>
          x.isbn === book.isbn ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    handlePrice();
  });

    return (
        <article>
        {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>

        

            {console.log(cartData)}
            <Button style={{backgroundColor:'#b2dfdb', color:"#00241B"}} variant = "outlined" onClick={() => handleChange(book, -1)} >-</Button>
            <Button  style={{color:"#00241B"}}variant = "outlined">{book.quantity}</Button>
            <Button style={{backgroundColor:'#b2dfdb', color:"#00241B"}} variant = "outlined" onClick={() => handleChange(book, 1)}>+</Button>

          </div>
          <div>
           <Button style={{ fontWeight: 'bold' , fontSize: '18px', marginRight:"80px", color:"#354259"}} margin="2px" variant="text" >${(book.price*book.quantity).toFixed(2)}</Button>
            <Button onClick={() => handleRemove(book.isbn)} variant="outlined" color="error">Remove</Button>
          </div>
        </div>
        ))}
        <div className="total">
        <Button style={{marginTop:"20px", color:"#00241B"}}>Total Price of your Cart</Button>
        <Button style={{ marginTop:"20px" ,fontWeight: 'bold' , fontSize: '18px', marginRight:"170px", color:"#00241B"}}>${price.toFixed(2)}</Button>
        
      </div>
      <Button style={{ marginTop:"20px" ,fontWeight: 'bold' , fontSize: '18px', backgroundColor:'#b2dfdb', color:"#00241B"}} variant="contained" startIcon={<ShoppingCartIcon />}>Checkout</Button>
        </article>
        
    );

};

export default Cart;