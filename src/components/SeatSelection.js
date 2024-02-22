
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SeatSelection.css';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 10;

  const handleSeatClick = (seat) => {
    const seatIndex = selectedSeats.indexOf(seat);
    if (seatIndex !== -1) {
      const newSelectedSeats = [...selectedSeats];
      newSelectedSeats.splice(seatIndex, 1);
      setSelectedSeats(newSelectedSeats);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotalPrice = () => {
    return selectedSeats.length * seatPrice;
  };

  return (
    <div className="SeatSelection">
      <h2>Seat Selection</h2>
      <div>
        {[...Array(8)].map((_, rowIndex) => (
          <div key={rowIndex} className={`seat-row${rowIndex === 0 ? ' first-row' : ''}`}>
            {[...Array(5)].map((_, colIndex) => {
              const seatNumber = rowIndex * 5 + colIndex + 1;
              const isSeatSelected = selectedSeats.includes(seatNumber);

              return (
                <div
                  key={colIndex}
                  className={`seat ${isSeatSelected ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seatNumber)}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Total Price: Rs {calculateTotalPrice()}/-</p>
      <div className='lin'>
        <Link to="/login"><button>Login to Pay</button></Link>
      </div>
    </div>
  );
};


export default SeatSelection;