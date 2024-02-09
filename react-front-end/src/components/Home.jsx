import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MapComponent from '../MapComponent';

// Define the Home component
const Home = () => {
  const [panToUser, setPanToUser] = useState(false);

  const handleNavigateMeClick = () => {
    setPanToUser(true);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is your home page content.</p>
      <button onClick={handleNavigateMeClick}>NavigateMe</button>
      <MapComponent panToUser={panToUser} setPanToUser={setPanToUser} />
    </div>
  );
};

// Export the Home component
export default Home;

// Define the route for '/Home' in your Routes component
<Route path="/Home" element={<Home />} />
