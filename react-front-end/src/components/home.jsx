import React from 'react';
import MenuAppBar from './navbar';
import Login from './login';
import Register from './register';
import UserProfile from './user_profile';
import Moods from './moods';

const Home = (props) => {
  return (
    <div className="App">
      <MenuAppBar />
     <Moods /> 
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
