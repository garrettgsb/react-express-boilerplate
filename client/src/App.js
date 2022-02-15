import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
    <h2>React Router</h2>
    <Router>
      <Link to="/">Home </Link>
      <Link to="/users">Users </Link>
      <Link to="/adventures">Adventures </Link>
    </Router>
      </div>
  );

};

export default App