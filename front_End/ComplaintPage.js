import React, { useState } from 'react';
import './Complaint.css';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup.string().email('Invalid email').required('Your Email is required'),
  mobile: yup.string().matches(/^\d{10}$/, 'Invalid mobile number').required('Mobile Number is required'),
  restaurantName: yup.string().matches(/^(adigas|a2b|truffles)$/i, 'Invalid restaurant name').required('Restaurant Name is required'),
  complaint: yup.string().required('Complaint is required'),
});

function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    restaurantName: '',
    complaint: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    schema
      .validateAt(name, { [name]: value })
      .then(() => setErrors((prevErrors) => ({ ...prevErrors, [name]: null })))
      .catch((err) => setErrors((prevErrors) => ({ ...prevErrors, [name]: err.errors[0] })));
  };
  const data={
    name: 'Aditya',
    email: 'hom@j',
    mobile: '95343324234',
    restaurantName: 'dsfsd',
    complaint: 'fdsfsd',
  }
  const submitComplaint = async() => {
    try {
      await schema.validate(formData);
      const response = await axios.post(
        'http://localhost:5000/complaints',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response.data);
      console.log('refreshed');
  
      if (response.data) {
        alert('Submitted Successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container">
      <h1>Complaint Registration</h1>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          required
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        <label htmlFor="restaurantName">Restaurant Name:</label>
        <input
          type="text"
          id="restaurantName"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleInputChange}
          required
        />
        {errors.restaurantName && <p className="error">{errors.restaurantName}</p>}

        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          name="complaint"
          rows="4"
          value={formData.complaint}
          onChange={handleInputChange}
          required
        />
        {errors.complaint && <p className="error">{errors.complaint}</p>}

        <button type="button" onClick={submitComplaint}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default Complaint;