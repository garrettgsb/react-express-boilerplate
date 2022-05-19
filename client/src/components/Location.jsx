import React from "react";
import "./Location.scss";
import { useState } from "react";
import axios from "axios";

export default function Location(props) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const locationSearch = (name) => {

    const options = {
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {address: name, language: 'en'},
      headers: {
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_GEOCODING_KEY}`
      },
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      props.setFound(true);
    }).catch(function (error) {
      console.error(error);
    }); 
  
  }

  return (
    <main className="location">
      <div className="location--name"> WELCOME!</div>
      <form className="location--form" onSubmit={handleSubmit}>
        <label>
          Before we begin, please enter the location or area you would like to
          start the trip:
          <div className="location--textbox">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </label>
        <div>
        <button className="location--button" onClick={() => locationSearch(name)}>Select</button>
        </div>
      </form>
    </main>
  );
}


