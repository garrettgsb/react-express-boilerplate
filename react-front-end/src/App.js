import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    message: 'Click the button to load data!'
  });


  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log("response", response.data) // The entire response from the Rails API

      console.log('msg', response.data.message) // Just the message
      const message = response.data.message
      setState({...state, message})
    }) 
  }

  return (
    <div className="App">
      <h1>{ state.message }</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>        
    </div>
  );
}

export default App;
