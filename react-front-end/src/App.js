import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AudioPlayer from './AudioPlayer';

//Socket io client
import socketIOClient from 'socket.io-client';
const ENDPOINT = '/';

const App = () => {

  const [state, setState] = useState({
    message: 'Click the button to load data!',
    src: ''
  });

  useEffect(() => {
    console.log("TEST")
    const socket = socketIOClient(ENDPOINT);
    socket.on('connect', () => console.log("we have connected!"))
  }, []);
  
  const fetchData = () => {
    axios.get('/api/data') 
    .then((response) => {
      // handle success
      console.log(response.data) 
      setState({
        ...state,
        src: response.data.src
      });
    }) 

  }

  return (
    <div className="App">
      <h1>{ state.message }</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>        
      {state.src && <AudioPlayer src ={state.src}/>}
    </div>
  );
}

export default App;