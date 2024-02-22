import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // function toggleVisibility(id) {
  //   const pointsElement = document.getElementById(id);
  //   pointsElement.classList.toggle('visible');
  // }

  return (
    <div>
      <div className="Home">
        <h2>Welcome to Bus Ticket Booking</h2>
        <p>Explore and book bus tickets for your journey.</p>
        <p>Enjoy a comfortable ride with us!</p>
        <Link to="/bus-search">
          <button>Get Started</button>
        </Link>
      </div>

      <div style={{ marginTop: '20px' }}></div>

      <div className='split'>
        <div className='Home1'>
          <h1>Make Your Bus Booking Smoother</h1>
          <p>Imagine the thrill of feeling the wind in your hair while looking at the changing scenes from a window-seat, in a bus. Makes you smile, doesn’t it? Bus journeys are always filled with such memorable and fun moments, which we look back at, fondly. And in our continuous endeavor to bring to our customers the best travel experiences, we now offer smarter bus booking services on our platform. Read on to know why you should make your upcoming bus ticket bookings</p>
        </div>

        <div className='Home2'>
          <h1>Booking Bus Ticket </h1>
          <p>With more than 10,000 bus routes spread across India and integration with over 1100 bus operators, the online bus reservation system is simpler and smarter. It provides you a wide range of facilities, right from choosing your pickup point to your preferred choice of seat (for instance, luxury buses with sleeper berths). You can also choose from the widest range of available buses like Mercedes, Volvo, Volvo AC, AC luxury, Deluxe, Sleeper, Express and other private buses. The payment options are easier too - you can use either debit/credit card facility or net-banking. Not just that, in case of any change in your travel plan, bus tickets can be canceled online. So, next time you need not stand in long queues or search at different bus ticket counters. You can directly book bus tickets online busticketbooking.com and stay assured.</p>
        </div>

        <div className='Home11'>
          <h1>Advantages of booking bus tickets online </h1>
          <p>The most important part of any trip is planning because if you plan well, you are sure to enjoy your trip better. And online bus bookings allow you just that. You can check for bus routes to your destination, compare prices with other nearby routes, choose from AC/non-AC buses as per your preference and more, all within a few minutes and with just a few taps on your phone. You can also avail of immediate cancellation in case of a sudden change in plans, within a few seconds, and without the hassle of falling in line for counter bus ticket booking. Online bus reservation lets you have an m-Ticket which again has its advantages. You do not need to carry a physical ticket, so the chances of forgetting it back at home are not there anymore. All you have to do is show your mobile screen at the counter, displaying the m-Ticket and you are sorted. Oh! And make sure to carry your government identity proof with you at all times.</p>
        </div>

        <div className='Home22'>
          <h1>MySafety Assurance on Bus Bookings</h1>
          <p>All the buses available on our platform follow stringent safety protocols and government-mandated social distancing guidelines, with the primary focus on customer safety.
            All customers have to undergo temperature checks mandatorily before boarding the bus.
            All the buses come with hand sanitizers.
            All the staff wear masks and gloves to minimize direct contact.
            The vehicle is thoroughly disinfected after the completion of every bus ride.
            Seats are allocated, keeping the social distancing norms in place.</p>
        </div>

          {/* <div className="QuickLinksContainer">
            <div className="QuickLink" onClick={() => toggleVisibility('topBusRoutes')}>
              <h2>Top Bus Routes</h2>
              <ul className="Points" id="topBusRoutes">
                <li>Sample point 1</li>
                <li>Sample point 2</li>
                <li>Sample point 3</li>
              </ul>
            </div>
            <div className="QuickLink" onClick={() => toggleVisibility('busesFromTopCities')}>
              <h2>Buses From Top Cities</h2>
              <ul className="Points" id="busesFromTopCities">
                <li>Sample point 1</li>
                <li>Sample point 2</li>
                <li>Sample point 3</li>
              </ul>
            </div>
            <div className="QuickLink" onClick={() => toggleVisibility('topRTCBuses')}>
              <h2>Top RTC Buses</h2>
              <ul className="Points" id="topRTCBuses">
                <li>Sample point 1</li>
                <li>Sample point 2</li>
                <li>Sample point 3</li>
              </ul>
            </div>
            <div className="QuickLink" onClick={() => toggleVisibility('topBusServices')}>
              <h2>Top Bus Services</h2>
              <ul className="Points" id="topBusServices">
                <li>Sample point 1</li>
                <li>Sample point 2</li>
                <li>Sample point 3</li>
              </ul>
            </div>
          </div> */}


      </div>
    </div>
  );
};

export default Home;
