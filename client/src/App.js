import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Cart from "./components/Cart"
function App() {
  return (
    <div className="App">
    	<Navbar />
      <Outlet />
      <Cart></Cart>
    </div>
  );
}

export default App;
