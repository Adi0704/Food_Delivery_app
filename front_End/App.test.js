import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders navigation links', () => {
  render(
    <App/>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Restaurant')).toBeInTheDocument();
  expect(screen.getByText('Cart')).toBeInTheDocument();
  expect(screen.getByText('Complaints')).toBeInTheDocument();
});

