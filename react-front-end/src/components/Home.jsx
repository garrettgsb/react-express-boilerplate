// Import necessary modules
import React from 'react';
import { Route } from 'react-router-dom';
import MapComponent from '../MapComponent';

// Define the Home component
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is your home page content.</p>
      <MapComponent />
    </div>
  );
};

// Export the Home component
export default Home;

// Define the route for '/Home' in your Routes component
<Route path="/Home" element={<Home />} />
