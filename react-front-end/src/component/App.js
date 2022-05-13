import React from 'react';
import useApplicationData from '../hooks/hook';

export default function App(){
  const { state, fetchData } = useApplicationData();

  return (
    <div className="App">
      <h1>{state.message}</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>
    </div>
  );
}