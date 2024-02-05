import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import CartPage from './CartPage';
import Rest from './Rest';
import Complaint from './ComplaintPage';
import './App.css';
import HomePage from './HomePage';

function App() {
  const [cart,setCart]=useState([])
  const handleAddToCart=(item)=>{
    const existingItem = cart.findIndex((cartItem) => cartItem.name === item.name);
          alert(existingItem)
          if(existingItem===-1) {
            setCart((cart) => [...cart, { ...item, count: 1 }]);
          }
          else {
            setCart((cart) =>
              cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
              )
            )
          }
          alert(`Added ${item.name} to the cart`);
          
        }

return (   
<div className='page-container'>
  <Router>
    <nav className="navbar">
      <ul className="nav-menu">
        <li>
          <Link to= "/">Home</Link>
        </li>
        <li>
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/complaints">Complaints</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/cart' element={<CartPage cart={cart} setCart={setCart}/>}/>
      <Route path='/restaurant' element={<Rest handleAddToCart={handleAddToCart}/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/complaints' element={<Complaint/>}/>
    </Routes>
  </Router>
</div>
    
); 
}

export default App;
