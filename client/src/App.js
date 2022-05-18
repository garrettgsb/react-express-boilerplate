import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header';
import Crawls from './components/Crawls';
import Login from './components/Login';
// import Venue from './components/Venue';

export default function App() {

  const testUser = {
    email: "test@test.com",
    password: "test"
  }

  const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  const userLogin = function(loginInfo) {
  console.log("Login!");

  if (loginInfo.email === testUser.email && loginInfo.password === testUser.password) {
  console.log("Logged in!");
  setUser({
    email: loginInfo.email
  });
} else {
  console.log("Wrong username or password!")
  }
}

  const logout = () => {
    setUser({email: ""});
  }

  const [message, setMessage ] = useState('Click the button to load data!');

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
      method: 'GET',
      url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
      params: {
        location: '49.2657017,-123.1009721',
        radius: '5000',
        language: 'en',
        keyword: 'brewery, bar, pub, gastropub '
      },
      headers: {
        'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
        'X-RapidAPI-Key': '2f8033e889mshb4c8ca74d55c336p1769fcjsna7c55af16b77'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  
    return (
      
        <div className="App">
        {(user.email !== "") ? (
          <div>
            <h2>Welcome, <span>{user.email}</span></h2>
            <button onClick={logout}>Logout</button>
            </div>
        ) : (
          <Login userLogin={userLogin} />
        )}
         <Header/>
         {/* <Venue /> */}
         <h1>{ message }</h1>
         <button onClick={Search} >
           Hop
         </button>    
         <Crawls />
       </div>
    );
}
