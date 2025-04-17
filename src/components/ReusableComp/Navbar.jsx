import React from 'react';
import assets from '../assets';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user'); // Replace 'user' with the appropriate key if different

    // Navigate to the homepage
    navigate('/'); // Adjust the route as needed
  };

  // Check if the user is logged in
  const userExists = localStorage.getItem('user') !== null;

  return (
    <>
      <nav className="navbar">
        <img className="logo" src={assets.logo} alt="logo" />
        <div className="navbar-main">
          <div className="navbar-content">
            <img className="icon" src={assets.clock} alt="clock" />
            <p className="second-title">Mon-Sun</p>
          </div>
          <div className="navbar-content">
            <img className="icon" src={assets.mail} alt="email" />
            <Link to="/gmail.com" className="second-title link">
              DISPATCH@ASGARGOLL.COM
            </Link>
          </div>
          <div className="navbar-content">
            <img className="icon" src={assets.location} alt="location" />
            <p className="second-title">800 W 5TH AVE #209, NAPERVILLE, IL 60563</p>
          </div>
           {/* Show logout button if user exists in localStorage */}
            {userExists && (
            <div className="navbar-content logout-button">
                <button onClick={handleLogout} className="logout-btn">
                <img src={assets.logout} alt="logout icon" className="logout-icon icon" />
                </button>
            </div>
            )}
        </div>
      </nav>
    </>
  );
}
