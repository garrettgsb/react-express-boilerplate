import React from 'react';
// import axios from 'axios';
import './App.css';
import Courses from './Courses';
import data from './data';

export default function App() {
    return (
      <div className="App">
        <Courses data={data}/>
      </div>
    );

};


