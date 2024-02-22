
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BusSearch from './components/BusSearch';
import SeatSelection from './components/SeatSelection';
import Login from './components/Login';
import Payment from './components/Payment';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';


const App = () => {
  return ( 
    <Router >
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus-search" element={<BusSearch />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;