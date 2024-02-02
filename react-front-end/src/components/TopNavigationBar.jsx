import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const navigate = useNavigate();
  // Check if the user is logged in by checking the localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName"); // Retrieve the user's name from localStorage

  // Function to handle user logout
  const handleLogout = () => {
    // Clear the isLoggedIn flag and userName from localStorage to log the user out
    localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("userName", "User's Name");
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <nav className="top-navigation-bar">
      <Link to="/home"> {/* Link to the home page */}
        <img src="/logoo.png" alt="Logo" className="logo" />
      </Link>
      <div className="navigation-items">
        {isLoggedIn ? (
          <>
            {/* Display user greeting and logout button if logged in */}
            <span>Hello, {userName}</span> {/* Display the user's name */}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          // Only show the Login link if the user is not logged in
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default TopNavigationBar;
