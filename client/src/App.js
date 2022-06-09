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

  const addToCart = (data) => {
    setCartData([...cartData, data])
  }
  
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
      <cartContext.Provider value={{cartData, addToCart}}>
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
    </cartContext.Provider>
    </productDataContext.Provider>
  );
}

export default App;
