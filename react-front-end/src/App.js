import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";
//pages
import MainPage from "./pages/main";
import About from "./pages/about";
import Search from "./pages/search";
import Match from "./pages/match";
import Login from './pages/login';
import SignUp from './pages/signup';

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
        <Nav/>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/match" element={<Match />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

        </Routes>
      </Router>
    );
  }
}

export default App;
