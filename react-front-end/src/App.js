import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar'
import Maintenance from './Components/Maintenance'
import Harvest from './Components/Harvest'
import Weather from './Components/Weather'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Maintenance />
        <Harvest />
        <Weather />
      </div>
    );
  }
}

export default App;
