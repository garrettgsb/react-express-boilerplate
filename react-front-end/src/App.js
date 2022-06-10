import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AudioPLayer from './AudioPlayer';

//Socket io client
import socketIOClient from 'socket.io-client';
const ENDPOINT = '/';

const App = () => {

  const [state, setState] = useState({
    message: 'Click the button to load data!',
    src: 'https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3'
  });

  useEffect(() => {
  console.log("TEST")
  const socket = socketIOClient(ENDPOINT);
  socket.on('connect', () => console.log("we have connected!"))
  }, []);
  
  const fetchData = () => {
    axios.get('https://api.deezer.com/track/3135554') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.title) // Just the message
      setState({
        message: response.data.title,
        src: response.data.preview
      });
    }) 
  }

  return (
    <div className="App">
      <h1>{ state.message }</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>        
      <AudioPLayer src = {state.src}/>
    </div>
  );
}



export default App;
