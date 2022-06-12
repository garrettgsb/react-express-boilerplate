import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import AudioPlayer from "./AudioPlayer";
import UserForm from "./components/UserForm";
import Game from "./Game";

// socket io client
import socketIOClient from "socket.io-client";
const ENDPOINT = "/";

const App = () => {
  // Grab the window URL and set the Room ID to that url.
  const windowUrl = window.location.search;
  const roomId = windowUrl.slice(windowUrl.indexOf('=') + 1, windowUrl.length - 1);

  const [user, setUser] = useState({
    username: '',
    roomId: roomId,
    score: 0
  });
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState({})
  const [state, setState] = useState({
    message: "Click the button to load data!",
    src: "",
  });

  const fetchData = () => {
    axios.get("/api/data").then((response) => {
      // handle success
      console.log(response.data);
      setState({
        ...state,
        src: response.data.src,
      });
    });
  };

  const createSocket = (user) => {
    setSocket(socketIOClient(ENDPOINT, {
      query: { username: user, roomId: roomId }
      
    }));
    setUser(prev => {
      return { 
        ...prev,
        username:user,
        roomId: prev.roomId ? prev.roomId : roomId 
      }
    });
  };

  return (
    <div className="App">
      <h1>{state.message}</h1>
      <button onClick={fetchData}>Fetch Music Data</button>

      {state.src && <AudioPlayer src={state.src} />}

      {user.username ? (
        <Game user={user} socket={socket} />
      ) : (
        <UserForm createSocket={createSocket} />
      )}
    </div>
  );
};

export default App;
