import React from "react";
import { useState } from "react";
import TopBar from "./components/TopBar";
import axios from "axios";
import "./App.scss";
import Home from "./components/Home";
import Homes_Rent from "./components/Homes_Rent";
import Sell from "./components/Sell";
import Homes_Sale from "./components/Homes_Sale";
import { Route, Link, Routes } from "react-router-dom";

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
      <TopBar />
      // can take this out later
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes_rent" element={<Homes_Rent />} />
        <Route path="/homes_sale" element={<Homes_Sale />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </div>
  );
}

export default App;
