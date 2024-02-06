import React from 'react';
import "./App.css";
import TopNavigationBar from './components/TopNavigationBar';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
import "./App.css";
import 'leaflet/dist/leaflet.css';
import Search from "./components/Search";
import WelcomePage from './components/WelcomePage';


import MapComponent from './MapComponent';

const App = () => {
  return (
    <div>
      <h1>Your Gas Station Locator App</h1>
      <MapComponent />
    </div>
  );
};

export default App;

