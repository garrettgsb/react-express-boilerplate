import React from 'react';
import '../styles/WelcomePage.scss'; // Import CSS file for styling

const WelcomePage = () => {
    return (
      <div className="welcome-page">
        <div className="text-container">
          <h1>Welcome to Gas Price Finder</h1>
          <p>We help you find the best gas prices near you!</p>
        </div>
        <div className="image-container">
          <img src="/pexels.jpg" alt="Welcome" className="image" />
        </div>
      </div>
    );
  };
  
  export default WelcomePage;