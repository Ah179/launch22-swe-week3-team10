import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import {useState, useEffect} from 'react'
import axios from "axios";

export const productDataContext = React.createContext()
export const cartContext = React.createContext()

function App() {
  const[productData, setProductData] = useState([])
  const[cartData, setCartData] = useState([])

  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  const addToCart = (data) => {
    setCartData([...cartData, data])
  }
  

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

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCartData([...arr]);
  // };
  
  useEffect(()=>{async function getBook()
    { const response= axios.get('/books');
    const body = await response; 
    setProductData(body.data.works);
    console.log('body', body);
    }
      getBook();
    }, [])

  
  return (
    <productDataContext.Provider value={productData}>
      <cartContext.Provider value={{cartData, setCartData, addToCart, removeFromCart, setCounter, counter, increase, decrease}}>
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
    </cartContext.Provider>
    </productDataContext.Provider>
  );
}

export default App;
