import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rest from './Rest';

const handleAddToCart = jest.fn();

test('renders Rest component', () => {
  render(<Rest handleAddToCart={handleAddToCart} />);
  expect(screen.getByText(/Welcome to Food Delivery App/i)).toBeInTheDocument();
  expect(screen.getByText(/Discover the best restaurants and enjoy delicious meals at your doorstep./i)).toBeInTheDocument();
  expect(screen.getByText(/Choose a Restaurant/i)).toBeInTheDocument();
});

// test('allows the user to select a restaurant and view its menu', () => {
//   render(<Rest handleAddToCart={handleAddToCart} />);

//   const select = screen.getByLabelText(/Choose a Restaurant/i);
//   fireEvent.change(select, { target: { value: 'Adigas' } });

//   expect(screen.getByText(/Menu/i)).toBeInTheDocument();
//   expect(screen.getByText(/Idly/i)).toBeInTheDocument();
//   expect(screen.getByText(/Dosa/i)).toBeInTheDocument();
//   expect(screen.getByText(/Coffee/i)).toBeInTheDocument();
// });

// test('allows the user to add items to the cart', () => {
//   const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
//   render(<Rest handleAddToCart={handleAddToCart} />);

//   const select = screen.query(/Choose a Restaurant/i);
//   fireEvent.change(select, { target: { value: 'Adigas' } });

//   const addButton = screen.getByRole('button', { name: /Add/i });
//   fireEvent.click(addButton);

//   // Check if alert was called
//   expect(alertSpy).toHaveBeenCalledWith(
//     'You can only order from one restaurant at a time. Please clear your cart.'
//   );

//   // Check if handleAddToCart was not called
//   expect(handleAddToCart).not.toHaveBeenCalled();
// });

// // Add more tests as needed...
