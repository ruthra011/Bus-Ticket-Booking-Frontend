
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BusSearch.css';

const BusSearch = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/seat-selection', {
      state: { source, destination, date },
    });
  };

  return (
    <div className="BusSearch">
      <h2>Bus Search</h2>
      <form onSubmit={handleSearch}>
        <label>
          From:
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
        </form>
         
        <div className='lin1'>
          <h1> 
            <Link to="/"><button>Back to Home</button></Link>
          </h1>
        </div>
    </div>
  );
};

export default BusSearch;
