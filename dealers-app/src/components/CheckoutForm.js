import React, { useState } from 'react';
import '../App.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cost: 0, // Add a default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add further logic here, like sending the data to a server
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label className="checkout-form-label">
          Name:
          <br />
          <input
            placeholder='Write your full name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        {/* Rest of the form elements */}
        <br />
        <button className="checkout-form-button" type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
