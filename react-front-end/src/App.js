import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar'
import VegetableBasket from './Components/VegetableBasket/VegetableBasket';
import Maintenance from './Components/Maintenance'


class App extends Component {

  render() {
    return (

    <main className="layout">

      <nav className="sidebar">
        <Sidebar/>
      </nav>

      <nav className="vegetable__basket">
        <VegetableBasket/>
      </nav>

      <div className="App">
        <Sidebar />
        <Maintenance />
      </div>
    );
  }
}

export default App;
