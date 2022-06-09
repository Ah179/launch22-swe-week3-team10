import React from 'react';
import "./Cart.css";
import { useContext, useState, useEffect } from 'react';
import {cartContext} from '../App';
import { Button} from '@mui/material';


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
    cartData.map((book) => (ans += book.price));
    setPrice(ans);
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
  const onAdd = (book) => {
    const exist = cartData.find((x) => x.isbn === book.id);
    if (exist) {
      setCartData(
        cartData.map((x) =>
          x.isbn === book.isbn ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartData([...cartData, { ...book, qty: 1 }]);
    }
  };
  const onRemove = (book) => {
    const exist = cartData.find((x) => x.isbn === book.id);
    if (exist.qty === 1) {
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
        {cartData.map((book) => (   
        <div className="cart_box" >
          <div className="cart_img">
            <img src={book.cover} alt="" />
            <p>{book.title}</p>
          </div>
          <div>

        

            {console.log(cartData)}
            <Button variant = "outlined" onClick={() => onRemove(book)} >-</Button>
            <Button variant = "contained">{counter}</Button>
            <Button variant = "outlined" onClick={() => onAdd(book)}>+</Button>

          </div>
          <div>
           <Button margin="2px" variant="text" color="success">${book.price}</Button>
            <Button onClick={() => handleRemove(book.isbn)} variant="outlined" color="error">Remove</Button>
          </div>
        </div>
        ))}
        <div className="total">
        <p>Total Price of your Cart</p>
        <p>${price.toFixed(2)}</p>
      </div>
        </article>
        
    );
}


export default Cart;