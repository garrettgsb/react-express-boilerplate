import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [state, setState] = useState([]);


  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log("response", response) // The entire response from the Rails API

      console.log('msg', response.data) // Just the message
      const message = response.data
      setState([...message])
    }, [])
  }

  return (
    <div className="App">
      <button onClick={fetchData} >
        Fetch Data
      </button>        
    </div>
  );
}

export default App;
