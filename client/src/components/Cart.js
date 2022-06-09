import React from 'react';
import "./Cart.css";
import { useContext } from 'react';
import {cartContext} from '../App';

function Cart() {
  const {cartData, addToCart, removeFromCart} = useContext(cartContext)
    return (
      
        <article>
        <div className="cart_box" >
          <div className="cart_img">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e213839-db48-4510-91c0-2e05eca3c6bd/air-force-1-07-lv8-mens-shoes-1BSQGs.png" alt="" />
            <p>Nike Air Force 1</p>
          </div>
          <div>
            {console.log(cartData)}
            <button >+</button>
            <button>3</button>
            <button onClick={()=> removeFromCart(cartData[2]) }>-</button>
          </div>
          <div>
            <span>$100</span>
            <button>Remove</button>
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