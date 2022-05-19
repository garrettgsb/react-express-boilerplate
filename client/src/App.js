import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header';
import Crawls from './components/Crawls';
import Venue from './components/Venue';
import {CardFlip} from "./components/Card";
import TripContainer from "./components/TripContainer";
import LoginForm from "./components/LoginForm";
import Location from "./components/Location";






export default function App() {
  const [found, setFound] = useState(false)
  const [message ] = useState('Click the button to load data!');
  const [searchResults, setSearchResults] = useState([]);
  const [bar,  setBar] = useState({});
  // const [photo, setPhoto] = useState({});
 
  // const fetchData = () => { 
  //     axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data) // The entire response from the Rails API
  //       console.log(response.data.message) // Just the message
  //       setMessage(response.data.message);
  //   })
  // }
  
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
      setSearchResults(response.data.results);
            
    }).catch(function (error) {
      console.error(error);
    });
    
    return result;
  
    
  };

  
    
   
  


  const RandNum= () => {
    let max = searchResults.length ;
    // console.log(max);
    let venueNum = Math.floor((Math.random() * max));
    // console.log(venueNum);
    console.log(searchResults[venueNum])
    return venueNum;
  }



  function click() {
  setBar(searchResults[RandNum()]);
  console.log(bar);
  // console.log(grabPhoto());
  // console.log(photo);
  console.log(bar.name);
  }

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
         <Header />
         {/* <LoginForm /> */}
        <div className="main">
        {found ? <CardFlip bar={bar}/> : <Location setFound={setFound}/>}
          <TripContainer />
          {/* <button onClick={Search}>Hop</button> */}
        </div>
          
         <h1>{ message }</h1>
         <button onClick={click} >
           Check
         </button> 
         <button onClick={Search} >
           Where are you from?
         </button>     
       </div>
    );
}

