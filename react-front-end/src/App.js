import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.css';

export default function Application(props) {

  const { setUser, fetchData, state } = useApplicationData();
  

    return (
      <main className="App">
        <nav>
          <h1>NavBar</h1>
          </nav>
        <div>
          <form autoComplete="off" onSubmit={()=>fetchData}>
            <lable>Enter github name: </lable>
            <input name="name" type="text" value={state.user || ""} onChange={(e) => setUser(e)}/>
            <button type="button" onClick={fetchData}>Submit</button>
          </form>
        </div>
        <div>FILTER</div>
        <div>
          <h1>show</h1>
          <img src={ state.avatar } alt="nothing"></img>
        </div>
      </main>
    );
}
            