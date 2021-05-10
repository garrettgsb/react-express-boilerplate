import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/vegetableBasket';
// import VegetableBasket from './Components/vegetableBasket';

class App extends Component {

  render() {
    return (
      <main className="layout">
        <section className="App">
          <Sidebar />
        </section>
        <section >
          <Content />
        </section>
      </main>
    );
  }
}

export default App;
