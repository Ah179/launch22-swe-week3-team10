import React from 'react';
import "./Cart.css";
import { useState, useEffect } from 'react';

    const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
  
    // const handleRemove = () => {
    //   const arr = cart.filter((item) => item.id !== id);
    //   setCart(arr);
    //   handlePrice();
    // };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    }, []); 
  
    console.log(cart);

    return (
        <article>
        {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            {/* <button onClick={() => handleRemove(item.id)}>Remove</button> */}
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>$ - {price}</span>
      </div>
        </article>
        
    );

};

export default Cart;