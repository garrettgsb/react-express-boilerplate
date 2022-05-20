import React from "react";
import "./Location.scss";
import { useState } from "react";
import axios from "axios";

export default  function Location(props) {
  const [name, setName] = useState("");
  const [locationLat, setLocationLat] = useState({})
  const [locationLng, setLocationLng] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  let lat;
  let lng;

  const  locationSearch = async (name) => {

    const options = { 
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {address: name, language: 'en'},
      headers: {
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_GEOCODING_KEY}`
      },
    };
    
      return await axios.request(options).then(async function  (response) {
        setLocationLat(response.data.results[0].geometry.location.lat)
        console.log(response.data);
        lat = (response.data.results[0].geometry.location.lat)
        lng = (response.data.results[0].geometry.location.lng)
        console.log(lat,lng);
        props.setFound(true);
         Search()
    }).catch(function (error) {
      console.error(error);
    }); 
    
  }
  let venue;
  let result = [];
  // let photo;
  const Search =  () => {
    console.log(lat, lng);

    const options = {
      method: 'GET',
      url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
      params: {
        location: `${lat},${lng}`,
        radius: '5000',
        language: 'en',
        keyword: 'brewery, bar, pub, gastropub '
      },
      headers: {
        "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPI_Key}`,
      },
    };

     axios.request(options).then(function ({data:{results}}) {
      props.setSearchResults(results);
      console.log(results);
      venue =(results[RandNum(results)]);
      // photo = (venue.photos[0].photo_reference);
      // setTimeout(grabPhoto,5000);
      
      props.click(venue);
    }).catch(function (error) {
      console.error(error);
    });
    
    return result;
  };

  // function grabPhoto() {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://google-maps28.p.rapidapi.com/maps/api/place/photo',
  //     params: {
  //       photo_reference: `${photo}`,
  //       maxwidth: '400',
  //       maxheight: '400'
  //     },
  //     headers: {
  //       'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
  //       'X-RapidAPI-Key':`5c41b0e00fmsh909a8fa79575aafp1e7795jsna8ea2a497dd3`
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
      
  //   }).catch(function (error) {
  //     console.error(error);
  //   });

  // }

  const RandNum = (results) => {
    let max =results.length;
    // console.log(max);
    let venueNum = Math.floor(Math.random() * max);
    // console.log(venueNum);
    return venueNum;
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
        <button className="location--button" onClick={async () =>  {await locationSearch(name);}}>Select</button>
        </div>
      </form>
    </main>
  );
}


