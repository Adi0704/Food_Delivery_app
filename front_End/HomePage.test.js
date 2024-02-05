import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from './HomePage';

test('renders HomePage component', () => {
  render(<HomePage />);
  expect(screen.getByText(/Welcome to Our Food Delivery App!/i)).toBeInTheDocument();
});

test('renders food cards with images', () => {
  render(<HomePage />);

  const imgElement = screen.getAllByRole('img');
  expect(imgElement).toHaveLength(3);
  imgElement.forEach((image) => {
    expect(image).toBeInTheDocument();
  });
 
});
test('renders correct images',()=>{
    render(<HomePage/>);
    const source=['/dosa.jpg','/burger.jpg','/pasta.jpg']
    const img=screen.getAllByRole('img');
    img.forEach((image,index)=>{
        expect(image).toHaveAttribute('src',source[index])
    });
})
