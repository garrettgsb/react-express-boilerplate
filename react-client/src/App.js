import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header';
import { CssBaseline } from '@mui/material';
import Crawls from './components/Crawls';
// import Venue from './components/Venue';

export default function App() {

  const [message, setMessage ] = useState('Click the button to load data!');

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
        <CssBaseline />
         <Header />
         {/* <Venue /> */}
         <h1>{ message }</h1>
         <button onClick={fetchData} >
           Fetch Data
         </button>    
         <Crawls />
       </div>
    );
}