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

  return (
    <div className="App">
      <TopBar />
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
