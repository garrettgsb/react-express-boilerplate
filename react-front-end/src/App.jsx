import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>{ this.state.message }</h1>
          <button onClick={this.fetchData} >
            Fetch Data
          </button>
          <Routes>
            <Route exact path='/' element={<Home/>}>
            </Route>
            <Route exact path='/dashboard'>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
