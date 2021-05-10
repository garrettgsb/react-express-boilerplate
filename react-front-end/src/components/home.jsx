import React from 'react';
import MenuAppBar from './navbar';
import Login from './login';
import Register from './register';

const Home = (props) => {
  return (
    <div className="App">
      <MenuAppBar />
      <Login />
      <Register />
      <h1>Hello!</h1>
      <button onClick={props.fetchData} >
      Fetch Data
      </button>        
    </div>
  )
}

export default Home;
