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

  let result = [];

  const Search = () => {

    const options = {
      method: 'GET',
      url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
      params: {
        location: '49.2657017,-123.1009721',
        radius: '5000',
        language: 'en',
        keyword: 'brewery, bar, pub, gastropub '
      },
      headers: {
        "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPI_Key}`,
      },
    };

    axios.request(options).then(function (response) {
      props.setSearchResults(response.data.results);
            
    }).catch(function (error) {
      console.error(error);
    });
    
    return result;
  };

  return (
    <main className="location">
      <div className="location--name"> WELCOME!</div>
      <form className="location--form" onSubmit={handleSubmit}>
        <label>
          Before we begin, please enter the location or area you would like to
          start the trip:
          <div className="location--textbox">
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </label>
        <div>
        <button className="location--button" onClick={() => [locationSearch(name), Search()]}>Select</button>
        </div>
      </form>
    </main>
  );
}


