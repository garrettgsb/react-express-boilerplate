import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar'
import VegetableBasket from './Components/VegetableBasket/VegetableBasket';

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
     </main>
    );
  }
}

export default App;
