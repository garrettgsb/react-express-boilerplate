import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header';
// import Venue from './components/Venue';

export default function App() {

  const [message, setMessage] = useState('Click the button to load data!');

  const fetchData = () => {
      axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API
        console.log(response.data.message) // Just the message
        setMessage(response.data.message);
    })
  }
  
    return (

        <div className="App">
         <Header />
         <h1>{ message }</h1>
         <button onClick={fetchData} >
           Fetch Data
         </button>        
       </div>
        
    );
}