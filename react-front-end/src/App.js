import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserCardContainer from './components/UserCardContainer';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/login-form'
import Nav from "./components/Nav";
import Matches from "./components/Matches";

const App = () => {
  const [state, setState] = useState({});
  const [preferences, setPreferences] = useState({});
  const [matches, setMatches] = useState([])
  const [swipeHistory, setSwipeHistory] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // if req.session.user_id exists, set loggedIn to true
  useEffect(() => {
    axios.get('/loggedIn')
      .then((results) => {
        if (results.data) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
  }, [loggedIn]);
  
  // promise chain for setting initial states
  // Depency: Will likely depend on swiping state
  useEffect(() => {
    Promise.all([
      axios.get('/api/users/1/all'),
      axios.get('/api/users/1'),
      axios.get('/api/users/1/messages'),
      axios.get('/api/users/1/likedBy')
    ])
    .then((all) => {
      setState({...state, 
        users: all[0].data, 
        user: all[1].data, 
        messages: all[2].data, 
        likedBy: all[3].data});
    }) 
  }, []);

  useEffect(() => {
    axios.get('/api/users/1/preferences')
      .then((results) => {
        setPreferences({...results.data});
      })
  }, []);

  // Separating matches so it has dependency to update
  useEffect(() => {
    axios.get('/api/users/1/matchings')
      .then((matches) => {
        setMatches([...matches.data]);
      })
  }, [swipeHistory])

  // like user - takes in swiped on Ids and like value:boolean
  const swipeUser = (toId, like) => {
    console.log("your swiped data in app.js:", {toId, like});
    axios.post('/api/users/1/matchings', {toId, like})
      .then((response) => {
        const freshSwipe = response.data[0];
        setSwipeHistory(prev => [...prev, freshSwipe])
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  // Makes post request when preferences update

  // Update users preferences state
  // need to pass preference key and new value as obj
  const updatePreferences = () => {
    const newPref = {
      ...preferences,
      location: 'testtt'
    };
    console.log('newPref', newPref);
    axios.post('/api/users/1/preferences', newPref)
    .then((results) => {
      setPreferences({...results.data})
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
      .then((results) => {
        console.log('rep session', results);
        setLoggedIn(false);
      })
      .catch((error) => console.log('err:', error));
  }
  // END OF SIGN OUT

  // Updating user profile 
  const updateProfile = (newValues) => {
    const newProfileValues = newValues;
    console.log('newvalues from newProfileValues', newProfileValues);
    // make axios post call
    axios.post('/api/users/1/edit', newProfileValues)
      .then((results) => {
        const oldProfile = state.user[0];
        const updatedUser = {...oldProfile, ...results.data[0]};
        console.log('updated user', updatedUser);
        setState({...state, user: [updatedUser]});
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };
  // end of updating user profile
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={
          !loggedIn 
          ? <LoginForm setLoggedIn={setLoggedIn} /> 
          : <>
              <Nav state={state} handleClickLogOut={handleClickLogOut}/>
              <UserCardContainer 
                users={state.users}
                preferences={preferences}
                likedBy={state.likedBy}
                swipeUser={swipeUser}
                profile={false}
              />
            </>
        } />

        <Route path='/users/1' element={
          !loggedIn 
            ? <LoginForm setLoggedIn={setLoggedIn} /> 
            : <>
                <Nav state={state} handleClickLogOut={handleClickLogOut}/>
                <UserCardContainer 
                  user={state.user}
                  profile={true}
                  editMode={false}
                  updateProfile={updateProfile}
                />
              </>
        } />

        <Route path='/login' element={
          !loggedIn 
            ? <LoginForm setLoggedIn={setLoggedIn} /> 
            : <>
                <Nav state={state} handleClickLogOut={handleClickLogOut} />
                <UserCardContainer 
                  users={state.users}
                  preferences={preferences}
                  likedBy={state.likedBy}
                  swipeUser={swipeUser}
                  profile={false}
                />
              </>
        } />

        <Route path='users/1/matches' element={
          !loggedIn 
            ? <LoginForm setLoggedIn={setLoggedIn} /> 
            : <>
                <Nav state={state} handleClickLogOut={handleClickLogOut} />
                <Matches state={state} matches={matches} />
              </>
        } />

      </Routes>
    </div>
  );
}

export default App;