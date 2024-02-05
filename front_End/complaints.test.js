import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Complaint from './ComplaintPage';

test('complaint',  () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  const Data = {
    name: 'Aditya',
    email: 'check@gmail.com',
    mobile: '1234567890',
    restaurantName: 'adigas',
    complaint: 'This is a test complaint.',
  };
  const name="Aditya"
  render(<Complaint />);

  expect(screen.getByText('Complaint Registration')).toBeInTheDocument();
  expect(screen.getByTestId('name')).toBeInTheDocument();
  
  fireEvent.change(screen.getByTestId('name'), { target: { value: Data.name } });
  fireEvent.change(screen.getByTestId('email'), { target: { value: Data.email } });
  fireEvent.change(screen.getByTestId('mobile'), { target: { value: Data.mobile } });
  fireEvent.change(screen.getByTestId('res'), { target: { value: Data.restaurantName } });
  fireEvent.change(screen.getByTestId('com'), { target: { value: Data.complaint } });

  
  expect(screen.getByTestId('name').value).toBe(Data.name);
  expect(screen.getByTestId('email').value).toBe(Data.email);
  expect(screen.getByTestId('mobile').value).toBe(Data.mobile);
  expect(screen.getByTestId('res').value).toBe(Data.restaurantName);
  expect(screen.getByTestId('com').value).toBe(Data.complaint);
  fireEvent.click(screen.getByText('Submit Complaint'));
  expect(alertSpy).toHaveBeenCalledWith('Complaint submitted successfully!');
});

