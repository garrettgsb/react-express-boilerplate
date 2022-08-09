import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import LoginForm from './components/login-form'
import Nav from "./components/Nav";
import Matches from "./components/Matches";


const App = () => {
  const [state, setState] = useState({});
  const [preferences, setPreferences] = useState({});

  // promise chain for setting initial states
  // Depency: Will likely depend on swiping state
  useEffect(() => {
    Promise.all([
      axios.get('/api/users/1/all'),
      axios.get('/api/users/1'),
      axios.get('/api/users/1/messages'),
      axios.get('/api/users/1/likedBy'),
      axios.get('/api/users/1/matchings'),
    ])
      .then((all) => {
        setState({
          ...state,
          users: all[0].data,
          user: all[1].data,
          messages: all[2].data,
          likedBy: all[3].data,
          matches: all[4].data
        });
      })
  }, []);

  useEffect(() => {
    axios.get('/api/users/1/preferences')
      .then((results) => {
        console.log("from axios get req:", results.data);
        setPreferences({ ...results.data });
      })
  }, []);

  // like user
  const swipeUser = (toId, like) => {
    axios.post('/api/users/1/matchings', { toId, like })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // Makes post request when preferences update

  // Update users preferences state
  // need to pass preference key and new value as obj
  const updatePreferences = () => {
    const newPref = {
      ...preferences,
      location: 'tesrser'
    };
    console.log('newPref', newPref);
    axios.post('/api/users/1/preferences', newPref)
      .then((results) => {
        console.log('results:', results);
        setPreferences({ ...results.data })
      })
      .catch(error => console.log(error));
  };

  // block user
  const blockUser = (blockId) => {
    axios.post('/api/users/1/blocked', { blockId })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // SIGN OUT FUNCTION AND BUTTON
  const handleClickLogOut = (e) => {
    e.preventDefault();
    console.log('Logn out clicked');
    axios.post('/logout')
      .then()
      .catch((error) => console.log('err:', error));
  }
  // END OF SIGN OUT


  return (
    <>
      <header> <Nav state={state} /></header>
      <Matches state={state} />
      <LoginForm />

    </>
  );
}

export default App;