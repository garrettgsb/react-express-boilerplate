import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.css';

export default function Application(props) {

  const { setUser, setURL, state } = useApplicationData();
  

    return (
      <div className="App">
        <img src={ state.avatar } alt="nothing"></img>


        <form autoComplete="off" onSubmit={setURL}>
          <input name="name" type="text" value={state.user || ""} onChange={(e) => setUser(e)}/>
          <button type="submit">Submit</button>
        </form>


      </div>
    );
}
            