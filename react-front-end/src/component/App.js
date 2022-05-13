import React from 'react';
import useApplicationData from '../hooks/hook';
import TopNav from './TopNav';
import BotNav from './BotNav';
// import '../sass/app.scss';

export default function App(){
  const { state, fetchData } = useApplicationData();

  return (
    <div className="App">
      <TopNav />
      <h1>{state.message}</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>
      <BotNav />
    </div>
  );
}