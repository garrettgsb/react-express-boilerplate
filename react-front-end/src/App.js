import React from "react";
import { useState } from "react";
import TopBar from "./components/TopBar";
import axios from "axios";
import "./App.scss";
import Home from "./components/Home";
import HomesRent from "./components/HomesRent";
import Sell from "./components/Sell";
import HomesSale from "./components/HomesSale";
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

  // Zillow API Testing

  // Query

  const options = {
    method: "GET",
    url: "https://zillow56.p.rapidapi.com/search",
    params: {
      location: "Calgary, Alberta",
      price_min: "250000",
      price_max: "1000000",
      beds_min: "2",
      beds_max: "8",
      baths_min: "2",
      baths_max: "5",
    },
    headers: {
      "X-RapidAPI-Key": "", // Left blank for now, will put key in .env file soon. (Key can be found in Google Doc)
      "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
    },
  };

  // Axios Request.
  // Returns an array of objects with data based on the query. Each object has an zpid as the key/value pair to get more
  // specific information on the property.

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // Another Axios request with the zpid to get more specific information about the individual property

  const options2 = {
    method: "GET",
    url: "https://zillow56.p.rapidapi.com/property",
    params: { zpid: "2061493872" },
    headers: {
      "X-RapidAPI-Key": "", // Left blank for now, will put key in .env file soon. (Key can be found in Google Doc)
      "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
    },
  };

  // In a set timeout function as the API only allows one request per second.

  setTimeout(() => {
    axios
      .request(options2)
      .then(function (response) {
        console.log("THIS IS THE SECOND AXIOS REQUEST");
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, 2000);

  return (
    <div className="App">
      <TopBar />
      // can take this out later
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes_rent" element={<HomesRent />} />
        <Route path="/homes_sale" element={<HomesSale />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </div>
  );
}

export default App;
