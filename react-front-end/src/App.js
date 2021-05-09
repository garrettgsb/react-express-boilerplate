import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar'
import Maintenance from './Components/Maintenance'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Maintenance />
      </div>
    );
  }
}

export default App;
