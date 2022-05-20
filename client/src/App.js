import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import { CardFlip } from "./components/Card";
import TripContainer from "./components/TripContainer";
import Location from "./components/Location";

export default function App() {
  const [found, setFound] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [bar, setBar] = useState({});
  // const [photo, setPhoto] = useState({});



  function click(venue) {
    setBar(venue);
    console.log(venue);
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



  return (
    <div className="App">
      <Header userLogin={userLogin} />
      {/* <LoginForm /> */}
      <div className="main">
        {found ? (
          <CardFlip bar={bar} />
        ) : (
          <Location setFound={setFound} setSearchResults={setSearchResults} click={click} />
        )}
        <TripContainer/>
      </div>
      <button onClick={click}>Check</button>
    </div>
  );
}
