import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import MenuAppBar from "./navbar";
import Login from "./login";
import Register from "./register";
import UserProfile from "./user_profile";
import Moods from "./moods";
import Resource from "./resource";
import HomeAnimation from "./home_animation";
import LoadingAnimation from "./loading_animation";
import UserContext from './UserContext';

const Home = (props) => {

  const [user, setUser] = useState({});
  const [moods, setMoods] = useState({});
  // console.log("usercontext", UserContext)

  const handleClick = (e) => {
    e.preventDefault();
    setMoods({
      category: e.target.value
    });
  };

  useEffect(() => {

  })

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
     {/* <Moods handleClick={handleClick}/>  */}
     {/* <Resource category={moods}/>  */}
      {/* <Login /> */}
      {/* <Register /> */}
      <UserProfile />
      {/* <HomeAnimation /> */}
      {/* <LoadingAnimation /> */}
      {/* <h1>Hello!</h1>
      <button onClick={props.fetchData} >
      Fetch Data
      </button>         */}
      </UserContext.Provider>
      <MenuAppBar />
      
    </div>
  );
};

export default Home;
