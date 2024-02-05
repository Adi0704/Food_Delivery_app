import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const foods = [
    { image: '/dosa.jpg' },
    {  image: '/burger.jpg' },
    {  image: '/pasta.jpg' },
    
  ];

  return (
    <div className="home-page">
      <h1>Welcome to Our Food Delivery App!</h1>
      <div className="food-grid">
        {foods.map((food, index) => (
          <div key={index} className="food-card">
            <img src={food.image} alt={food.name} />
            <h2>{food.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;