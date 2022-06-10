import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import {useState, useEffect} from 'react'
import axios from "axios";
import {Helmet} from "react-helmet"

export const productDataContext = React.createContext()
export const cartContext = React.createContext()

function App() {
  
  const[productData, setProductData] = useState([])
  const[cartData, setCartData] = useState([])

  const [counter, setCounter] = useState(1);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  const addToCart = (data) => {
    setCartData([...cartData, {...data, quantity: 1}])
  }
  

  const handleChange = (book, d) => {
    const ind = cartData.indexOf(book);
    const arr = cartData;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCartData([...arr]);
  };
  const removeFromCart = (data) => {
    let i = cartData.indexOf(data)
    const newCart = cartData;
    newCart.splice(i, 1)
    setCartData(newCart)
    console.log(newCart)
  }
  // const handleChange = (data, d) => {
  //   const ind = cartData.indexOf(data);
  //   const arr = cartData;
  //   arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <productDataContext.Provider value={productData}>
      <cartContext.Provider value={{cartData, setCartData, addToCart, removeFromCart, setCounter, counter, increase, decrease, handleChange}}>
    <div className="App">
    	<Navbar />
      <Outlet />
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
    </cartContext.Provider>
    </productDataContext.Provider>
  );
}

export default App;
