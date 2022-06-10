import React from 'react';
import "./Cart.css";
import { useContext, useState, useEffect } from 'react';
import {cartContext} from '../App';
import { Button} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Cart() {
    
  const {cartData, addToCart, setCartData, removeFromCart, setCounter, counter, increase, decrease} = useContext(cartContext)

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
    if (exist) {
      setCartData(
        cartData.map((x) =>
          x.isbn === book.isbn ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartData([...cartData, { ...book, quantity: 1 }]);
    }
  };
  const onRemove = (book) => {
    const exist = cartData.find((x) => x.isbn === book.isbn);
    if (exist.quantity === 1) {
      setCartData(cartData.filter((x) => x.isbn !== book.isbn));
    } else {
      setCartData(
        cartData.map((x) =>
          x.isbn === book.isbn ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  const handleChange = (book, d) => {
    const ind = cartData.indexOf(book);
    const arr = cartData;
    const result = {key: '{book.key}', title: '{book.title}', authors: '{book.author}', isbn: '{book.isbn}', cover: '{book.cover}', amount: "{d}"};
    const newArr = [...arr, {...result}]
    arr = newArr;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartData([...arr]);
  };
  
  

  useEffect(() => {
    handlePrice();
  });

    return (
      
        <article>

        {cartData.map((book) => (   
        <div className="cart_box" >
          <div className="cart_img">
            <img src={book.cover} alt="" />
            <p>{book.title}</p>

          </div>
          <div>

        

            <Button style={{ fontWeight: 'bold' , fontSize: '18px', marginRight:"80px", color:"#354259"}} margin="2px" variant="text" >${(book.price).toFixed(2)}</Button>

        

          </div>
          <div>
           

            <Button style = {{backgroundColor:'#b2dfdb', color:"#00241B", border:"none"}} variant = "outlined" onClick={() => onRemove(book)} >-</Button>
            <Button style = {{color:"#00241B", border:"none"}} variant = "text">{book.quantity}</Button>
            <Button style = {{backgroundColor:'#b2dfdb', color:"#00241B", border:"none"}} variant = "outlined" onClick={() => onAdd(book)}>+</Button>

          </div>
          <div>
           
          <Button style = {{fontWeight: "bold", color:"#00241B", marginRight:"20px", fontSize:"18px"}} variant = "text">${(book.price*book.quantity).toFixed(2)}</Button>
            <Button onClick={() => handleRemove(book.isbn)} variant="outlined" color="error">Remove</Button>
          </div>
        </div>
        ))}
        <div className="total">

        <Button style={{marginTop:"20px", color:"#00241B"}}>Total Price of your Cart</Button>
        <Button style={{ marginTop:"20px" ,fontWeight: 'bold' , fontSize: '18px', marginRight:"110px", color:"#00241B"}}>${price.toFixed(2)}</Button>
        


      </div>
      <Button style={{ marginTop:"20px" ,fontWeight: 'bold' , fontSize: '18px', backgroundColor:'#b2dfdb', color:"#00241B"}} variant="contained" startIcon={<ShoppingCartIcon />}>Checkout</Button>
        </article>
        
    );

};

export default Cart;