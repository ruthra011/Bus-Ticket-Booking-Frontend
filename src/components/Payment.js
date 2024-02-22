
import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const journeyDetails = {
    name: 'Bus Journey',
    from: 'City A',
    to: 'City B',
    seats: [1, 2, 3],
    date: '2023-12-25',
    cost: 30,
  };

  const handlePayment = () => {
  };

  return (
    <div>
      <h2>Payment Overview</h2>
      <div>
        <p>Name: {journeyDetails.name}</p>
        <p>From: {journeyDetails.from}</p>
        <p>To: {journeyDetails.to}</p>
        <p>Seats: {journeyDetails.seats.join(', ')}</p>
        <p>Date: {journeyDetails.date}</p>
        <p>Cost: ${journeyDetails.cost}</p>
      </div>

      <h2>Select Payment Method</h2>
      <select>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>

      <button onClick={handlePayment}>Pay Now</button>
      <p>
        Want to go back? <Link to="/seat-selection">Back to Seat Selection</Link>
      </p>
    </div>
  );
};

export default Payment;
