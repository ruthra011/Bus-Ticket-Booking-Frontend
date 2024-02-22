import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareWhatsapp,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
import './About.css';

const About = () => {
  return (
    <div className='about-box'>
      <h2>About Us</h2>
      <p>
        Welcome to our Bus Ticket Booking platform! We aim to provide a seamless
        experience for booking bus tickets and making your journey comfortable.
      </p>
      <p>
        Feel free to explore our website and use the various features we offer
        for searching buses, selecting seats, and making secure payments.
      </p>
      <p>
        If you have any questions or feedback, please don't hesitate to contact
        us. We are here to assist you!
      </p>

      <div className="contact-box">
        <h3>Contact Us</h3>
        <p>
          If you have any inquiries, please feel free to reach out to us.
          Our support team is available to assist you.
        </p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faSquareWhatsapp} />
        </div>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
    </div>
  );
};

export default About;
