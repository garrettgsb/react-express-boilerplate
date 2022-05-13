import React from 'react';
import useApplicationData from '../hooks/hook';
import Main from './mainView/Main';
import Login from './Login';
// import '../sass/app.scss';

export default function App(){
  const { state, fetchData } = useApplicationData();

  //views
  const LOGIN = 'LOGIN'; 
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  return (
    <div className="App">
      <Login />

      <Main />
      <h1>{state.message}</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>



    </div>
  );
}