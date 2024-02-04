import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext'; 
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = (props) => {
  const { user, signOut } = useContext(UserContext); 
  return (
    <nav className="top-navigation-bar">
      <Link to="/Home"> {/* Link to the home page */}
        <img src="/logo.png" alt="Logo" className="logo" />
      </Link>
      <div className="navigation-items">
        
        
        {/* Check if the user is logged in */}
        {user ? (
          <>
            <span>Hello, {user.username}</span>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      {/* Add any additional markup for the navigation bar */}
    </nav>
  );
};

export default TopNavigationBar;
