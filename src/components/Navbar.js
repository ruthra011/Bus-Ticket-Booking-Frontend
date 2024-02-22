import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="logo">
        <FontAwesomeIcon className='bus' icon={faBusAlt} size="lg" style={{"--fa-primary-color": "ff0000", "--fa-secondary-color": "ff0000",}} />
      </div>
      <ul>
        <li>
          <Link to="/" className='ink'><FontAwesomeIcon icon={faHouse} /></Link>
        </li>
        <li>
          <Link to="/bus-search" className='ink'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
        </li>
        <li>
          <Link to="/about" className='ink'><FontAwesomeIcon icon={faAddressCard} /></Link>
        </li>
        <li>
          <Link to="/login" className='ink'><FontAwesomeIcon icon={faRightToBracket} /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
