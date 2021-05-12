import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuAppBar from './navbar';
import Login from './login';
import Register from './register';
import UserProfile from './user_profile';
import Moods from './moods';
import Resource from './resource';

const Home = (props) => {

  return (
    <div className="App">
      <MenuAppBar />
      
     {/* <Moods/>  */}
     <Resource /> 
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <UserProfile /> */}
      {/* <h1>Hello!</h1>
      <button onClick={props.fetchData} >
      Fetch Data
      </button>         */}
    </div>
  )
}

export default Home;
