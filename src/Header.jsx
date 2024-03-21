import React from 'react';
import { NavLink } from 'react-router-dom';
import Gspeed from './assets/gspeed.png';

function Header() {
  return (
    <div className="mt-1 flex justify-between p-2 px-5 pt-3 rounded-lg shadow-md">
      <div>
        <img src={Gspeed}></img>
      </div>
      <div className="block">
        <nav className="flex gap-6" aria-label="Tabs">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive 
                ? "shrink-0 rounded-lg p-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-100 hover:text-gray-700"
                : "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-yellow-100 hover:text-gray-700"
            }
          >
            Book
          </NavLink>

          <NavLink
            to="/mybookingpage"
            className={({ isActive }) => 
              isActive 
                ? "shrink-0 rounded-lg p-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-100 hover:text-gray-700"
                : "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-yellow-100 hover:text-gray-700"
            }
          >
            My Booking
          </NavLink>

          <NavLink
            to="/reserved"
            className={({ isActive }) => 
              isActive 
                ? "shrink-0 rounded-lg p-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-100 hover:text-gray-700"
                : "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-yellow-100 hover:text-gray-700"
            }
          >
            Reserved
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;