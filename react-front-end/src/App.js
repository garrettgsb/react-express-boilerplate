import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const [message, setMessage] = useState("");

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API
        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
