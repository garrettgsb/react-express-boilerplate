import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import Crawls from "./components/Crawls";
import Venue from "./components/Venue";
import { CardFlip } from "./components/Card";
import TripContainer from "./components/TripContainer";
import LoginForm from "./components/LoginForm";
import Location from "./components/Location";

export default function App() {
  const [found, setFound] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [bar, setBar] = useState({});
  // const [photo, setPhoto] = useState({});

  const RandNum = () => {
    let max = searchResults.length;
    // console.log(max);
    let venueNum = Math.floor(Math.random() * max);
    // console.log(venueNum);
    console.log(searchResults[venueNum]);
    return venueNum;
  };

  function click() {
    setBar(searchResults[RandNum()]);
    console.log(bar);
    // console.log(grabPhoto());
    // console.log(photo);
    console.log(bar.name);
  }

  const userLogin = function (loginInfo, cb) {
    console.log("CB!", cb);

    const data = {
      email: loginInfo.email,
      password: loginInfo.password,
    };

    return axios.post("/login", data)
      .then()
  };

  // function grabPhoto() {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://google-maps28.p.rapidapi.com/maps/api/place/photo',
  //     params: {
  //       photo_reference: "",
  //       maxwidth: '400',
  //       maxheight: '400'
  //     },
  //     headers: {
  //       'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
  //       'X-RapidAPI-Key': '2f8033e889mshb4c8ca74d55c336p1769fcjsna7c55af16b77'
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //     setPhoto(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });

  // }

  return (
    <div className="App">
      <Header userLogin={userLogin} />
      {/* <LoginForm /> */}
      <div className="main">
        {found ? (
          <CardFlip bar={bar} />
        ) : (
          <Location setFound={setFound} setSearchResults={setSearchResults} />
        )}
        <TripContainer/>
      </div>
      <button onClick={click}>Check</button>
    </div>
  );
}
