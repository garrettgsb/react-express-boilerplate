import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
