import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Forecast from './components/Forecast.jsx';
import './App.scss';
import './components/Button.scss';
import Header from './components/Header.jsx';

function App() {

  // const constructor = (props) => {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!'
  //   }
  // }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

    return (
      <div className="App">
        <Header />        
      </div>
    );
}

export default App;
