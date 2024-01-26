import React from "react";
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = (props) => {
  return (
    <nav className="top-navigation-bar">
      
      <img src="/logo.png" alt="Logo" className="logo" />
      <div className="navigation-items">
       
        {/* Add other navigation links here */}
      </div>
      {/* Add any additional markup for the navigation bar */}
    </nav>
  );
};

export default TopNavigationBar;
