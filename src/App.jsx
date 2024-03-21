import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Import your Header component // Import your Home component
import Booking from './Booking'; // Import your MyBooking component
import FlightPage from './FlightPage';
import FlightAlert from './FlightAlert';
import MyBooking from './MyBooking.jsx';



function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/flightpage" element={<FlightPage />} />
          <Route path="/mybookingpage" element={<MyBooking />} />

        </Routes>


      </div>
    </Router>
  );
}

export default App;
