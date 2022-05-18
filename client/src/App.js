import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
// import Venue from './components/Venue';
import { CardFlip } from "./components/Card";
import TripContainer from "./components/TripContainer";
import LoginForm from "./components/LoginForm";

export default function App() {

  // const [message, setMessage ] = useState('Click the button to load data!');

  // const fetchData = () => {
  //     axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data) // The entire response from the Rails API
  //       console.log(response.data.message) // Just the message
  //       setMessage(response.data.message);
  //   })
  // }

  const Search = () => {
    const options = {
      method: "GET",
      url: "https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json",
      params: {
        location: "49.2657017,-123.1009721",
        radius: "5000",
        language: "en",
        keyword: "brewery, bar, pub, gastropub ",
      },
      headers: {
        "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPI_Key}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <Header />
      <LoginForm />
      <div className="main">
        <CardFlip />
        <TripContainer />
        <button onClick={Search}>Hop</button>
      </div>
    </div>
  );
}
