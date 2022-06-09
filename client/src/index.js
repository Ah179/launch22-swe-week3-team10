import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error.js';
import ProductsPage from './components/ProductsPage/ProductsPage'
import BookPage from './components/ProductsPage/BookPage'
import Cart from './components/Cart'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<ProductsPage/>} />
        <Route path="book/:isbn" element={null} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<Error />} />
        <Route path="/bookpage" element={<BookPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
