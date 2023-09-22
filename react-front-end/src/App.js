import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import RegistrationForm from "./pages/registration";
import Navbar from "./pages/navbar";
import Layout from "./pages/Movie";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App(props) {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route index element={<Layout />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}
/*
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
      console.log(__dirname + '/react-front-end/views')
      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
*/
