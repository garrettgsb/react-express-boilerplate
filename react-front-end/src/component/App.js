import React from 'react';
import useApplicationData from '../hooks/hook';
import Nav from './Nav';
// import '../sass/app.scss';

export default function App(){
  const { state, fetchData } = useApplicationData();

  return (
    <div className="App">
      <Nav />
      <h1>{state.message}</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>
    </div>
  );
}