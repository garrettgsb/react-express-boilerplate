import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import BottomNav from './BottomNav/BottomNav';

export default function App () {
  const [msg, setMsg] = useState("Click the button to load data!");
  
  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      setMsg(response.data.message)
    }) 
  };

  return (
    <div className="App">
      <h1>{ msg }</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>
      <BottomNav />
    </div>
  )
};