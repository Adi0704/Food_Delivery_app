import React, { useState } from 'react';
import './Rest.css';

function Rest({ handleAddToCart }) {
  const restaurants = ['Adigas', 'A2B', 'Truffles'];
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  const handleRestaurantChange = (event) => {
    const res = event.target.value;
    setSelectedRestaurant(res);

    switch (res) {
      case 'Adigas':
        setMenu([
          { id: 1, name: 'Idly', price: 30, img: '/idly.jpg',resid:'Adigas'},
          { id: 2, name: 'Dosa', price: 50, img: '/dosa.jpg',resid:'Adigas' },
          { id: 3, name: 'Coffee', price: 10, img: '/coffee.jpg',resid:'Adigas' },
        ]);
        break;
      case 'A2B':
        setMenu([
          { id: 4, name: 'Boiled Egg(2pc)', price: 25, img: '/egg.jpg',resid:'A2B' },
          { id: 5, name: 'Paneer Roll', price: 120, img: '/paneer.jpg',resid:'A2B' },
          { id: 6, name: 'Apple Juice', price: 70, img: '/apple.jpg' ,resid:'A2B'},
        ]);
        break;
      case 'Truffles':
        setMenu([
          { id: 7, name: 'Pizza', price: 450, img: '/pizza.jpg',resid:'Truffles' },
          { id: 8, name: 'Burger', price: 100, img: '/burger.jpg',resid:'Truffles'},
          { id: 9, name: 'Pasta', price: 200, img: '/pasta.jpg',resid:'Truffles'},
        ]);
        break;
      default:
        setMenu([]);
    }
  };

  const AddToCart = (item,selectedRestaurant) => {
  
    if (cart.length > 0 && cart[0].restaurant!== selectedRestaurant) {
      alert('You can only order from one restaurant at a time. Please clear your cart.');
      return;
    }
  

    handleAddToCart(item, selectedRestaurant);
    
    
    setCart([{ ...item, restaurant: selectedRestaurant }]);
  };

  return (
    <div className="rest">
      <h1>Welcome to Food Delivery App</h1>
      <p>Discover the best restaurants and enjoy delicious meals at your doorstep.</p>

      <h2>Choose a Restaurant</h2>
      <select value={selectedRestaurant} onChange={handleRestaurantChange} id="drop">
        <option value="" >Select a Restaurant</option>
      {restaurants.map((restaurant) => (
          <option key={restaurant} value={restaurant}>
            {restaurant}
          </option>
        ))}
      </select>
      {selectedRestaurant && (
        <div>
          <h3>Menu</h3>
          <ul>
            {menu &&
              menu.map((item) => (
                <li key={item.name} className="menu-item">
                  <img src={item.img} alt={item.name} className="menu-item-img" />
                  <div className="menu-item-text">
                    <span className="item-name">{item.name}</span>

                    <button onClick={() => AddToCart(item,selectedRestaurant)}>Add</button>
                    
                    <span className="item-rate">{item.price}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Rest;
