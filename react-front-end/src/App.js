import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AudioPlayer from './AudioPlayer';
import UserForm from './components/UserForm';
import Game from './Game'

//Socket io client
import socketIOClient from 'socket.io-client';
const ENDPOINT = '/';
let socket = '';

const App = () => {

  const[username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    message: 'Click the button to load data!',
    src: ''
  });

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
  const createSocket = (user) => {
    socket = socketIOClient(ENDPOINT, {
      query: `username=${user}`
    });
    setUsername(user);
  }

  return (
    <div className="App">
      <h1>{ state.message }</h1>
      <button onClick={fetchData} >
        Fetch Music Data
      </button>
      <br></br>
      <input type='text' id='username' placeholder='Enter Username'>
      </input>
      <button>
        Submit
      </button>
      {state.src && <AudioPlayer src ={state.src}/>}
      
      {username ? <Game username = {username} socket = {socket}/> : <UserForm setUserName ={setUsername} createSocket = {createSocket}/>}
      
    </div>
  );
}

export default App;