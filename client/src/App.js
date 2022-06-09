import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Cart from "./components/Cart"
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
  
    <div className="App">
    	<Navbar />
      <Outlet />
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
  );
}

export default App;
