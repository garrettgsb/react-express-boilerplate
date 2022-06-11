import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AudioPlayer from './AudioPlayer';

//Socket io client
import socketIOClient from 'socket.io-client';
const ENDPOINT = '/';
const socket = socketIOClient(ENDPOINT);

const App = () => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    message: 'Click the button to load data!',
    src: ''
  });

  useEffect(() => {
    console.log("This useEffect runs only once!")
    socket.on('INITIAL_CONNNECTION', data => {
      setUser(data.name)
      setUsers(data.users)
    })

    socket.on('NEW_USER', data => {
      setUsers(prev => {
        return [...prev, data.name]
      })
    })

    socket.on('DISCONNECTED_USER', data => {
      setUsers(data.users)
    })

  }, [socket]);
  
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
        Fetch Music Data
      </button>
      <br></br>
      <input type='text' id='username' placeholder='Enter Username'>
      </input>
      <button>
        Submit
      </button>
      {state.src && <AudioPlayer src ={state.src}/>}
      {user ? <h2>User: {user}</h2> : <h3>Loading...</h3>}
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul> 
    </div>
  );
}

export default App;