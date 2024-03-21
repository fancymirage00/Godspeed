import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';  
import Booking from './Booking';
import FlightPage from './FlightPage';
import FlightAlert from './FlightAlert';
import MyBooking from './MyBooking.jsx';
import Reserved from './Reserved.jsx';
import Footer from './Footer.jsx';
import PassDetails from './PassDetails.jsx';



function App() {
  return (
    <Router>
      <div className="relative">
        <Header />

        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/flightpage" element={<FlightPage />} />
          <Route path="/mybookingpage" element={<MyBooking />} />
          <Route path="/reserved" element={<Reserved />} />
          <Route path="/passdetails" element={<PassDetails />} />

        </Routes>


      </div>
    </Router>
  );
}

export default App;
