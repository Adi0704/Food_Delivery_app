import React, { useState } from 'react';
import './CartPage.css';
import { FaStar } from 'react-icons/fa';

const CartPage = ({ cart, setCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [hotelRating, setHotelRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [reviewsSubmitted, setReviewsSubmitted] = useState(0);

  const handleIncrement = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleReviewSubmit = () => {
    setHotelRating(0);
    setFoodRating(0);
    setOrderPlaced(false);
    setReviewsSubmitted(1);
  };

  return (
    <div className="page-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Start adding items from the restaurant.</p>
      ) : (
        <>
          {
          
          !orderPlaced ? 
          (<>
              <ul>
                {cart.map(
                  (item, index) => (
                  <li key={index} className="cart-item">
                    <div className="item-info">
                      {item.name}
                      <div className="item-actions">
                        <button onClick={() => handleDecrement(index)}>-</button>
                        <span className="item-count">{item.count}</span>
                        <button onClick={() => handleIncrement(index)}>+</button>
                      </div>
                    </div>
                  </li>
                )
              )
            }
              </ul>
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Confirm and Place Order
              </button>
            </>
          ) 
          :
           (
            <>
              {
              reviewsSubmitted===1 ?
             (
                <p className="thank-you-message">Thank you for your reviews!</p>
              ) :
               (
                <div className="review-section">
                  <p>Rate the hotel:</p>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <FaStar
                        key={rating}
                        className={hotelRating >= rating ? 'star active' : 'star'}
                        onClick={() => setHotelRating(rating)}
                      />
                    ))}
                  </div>
                  <p>Rate the food:</p>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <FaStar
                        key={rating}
                        className={foodRating >= rating ? 'star active' : 'star'}
                        onClick={() => setFoodRating(rating)}
                      />
                    ))}
                  </div>
                  <button className="submit-review-btn" onClick={handleReviewSubmit}>
                    Submit Review
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
