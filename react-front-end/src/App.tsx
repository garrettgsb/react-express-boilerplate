import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import UserForm from "./components/UserForm";
import Game from "./Game";
import { getRoomId } from "./util/roomGenerator";

// socket io client
// import socketIOClient from "socket.io-client";
const socketIOClient = require("socket.io-client");
const ENDPOINT = "/";

const App = () => {
  // Grab the window URL and set the Room ID to that url. URL should be formatted as localhost:3000/?[:roomId]
  const roomId = getRoomId();

  const [user, setUser] = useState({
    username: '',
    roomId: roomId,
    score: 0
  });
  const [socket, setSocket] = useState({})
  const [state, setState] = useState({
    message: "Click the button to load data!",
    src: "",
  });

  const fetchData = (): void => {
    axios.get("/api/data").then((response) => {
      // handle success
      console.log(response.data);
      setState({
        ...state,
        src: response.data.src,
      });
    });
  };

  const createSocket = (username: string): void => {
    setUser(prev => {
      return { 
        ...prev,
        username: username,
      }
    });
    setSocket(socketIOClient(ENDPOINT, {
      query: { username: username, roomId: user.roomId }
    }));
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
