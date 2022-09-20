import React from "react";
import { useState } from "react";
import TopBar from "./components/TopBar";
import CardItem from "./components/CardItem";
import Banner from "./components/Banner";
import axios from "axios";
import "./App.scss";
import Home from "./Home";
import Homes_Rent from "./Homes_Rent";
import Sell from "./Sell";
import Homes_Sale from "./Homes_Sale";
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
