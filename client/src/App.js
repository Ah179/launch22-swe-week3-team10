import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import {useState, useEffect} from 'react'
import axios from "axios";

export const productDataContext = React.createContext()

function App() {
  const[productData, setProductData] = useState()
  useEffect(()=>{async function getBook()
    { const response= axios.get('http://localhost:9000/books');
    const body = await response; 
    setProductData(body.data.works);
    console.log('body', body);
    }
      getBook();
    }, [])

  
  return (
    <productDataContext.Provider value={productData}>
    <div className="App">
    	<Navbar />
      <Outlet />
    </div>
    </productDataContext.Provider>
  );
}

export default App;
