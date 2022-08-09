import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserCardContainer from './components/UserCardContainer';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [state, setState] = useState({});
  const [preferences, setPreferences] = useState({});
  const [matches, setMatches] = useState([])
  const [swipeHistory, setSwipeHistory] = useState([]);
  
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
        setMatches(prev => [...prev, ...matches.data]);
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
    axios.post('/api/users/1/blocked', {blockId})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // LOGIN AND SIGNOUT - everything in here will likely need to be moved to login page when we start working on front end
  // DISCUSS: either keep pw as strings or implement bcrpyt later on
  // initial state of these empty string
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleClickLogIn = (e) => {
    // prevent default action of a button type = submit 
    e.preventDefault();
    axios.post('/login', {username, password})
      .then((response) => {
        if (!response.data) {
          // do error alert
          console.log('no login msg', response);
        } else {
          setUsername('');
          setPassword('');
        }
      })
      .catch((error) => console.log('err:', error));
  };
  /// End of login and signout stuff

  // SIGN OUT FUNCTION AND BUTTON
  const handleClickLogOut = (e) => {
    e.preventDefault();
    console.log('Logn out clicked');
    axios.post('/logout')
      .then()
      .catch((error) => console.log('err:', error));
  }
  // END OF SIGN OUT

  // Updating user profile 
  const updateProfile = (newValues) => {
    console.log('new profile values in app.js', newValues);
    // make axios post call
  };
  // end of updating user profile
  return (
    
    <div className="App">
  
      <Routes>
        <Route path='/' element={
          <>    
            <button className="border border-black">
              <Link to="/home">Home</Link>
            </button>        
            <button className="border border-black ml-2"> 
              <Link to="/users/1">/users/:id/edit</Link>
            </button>
          </>
        } />

        <Route path='/home' element={
          <UserCardContainer 
            users={state.users}
            preferences={preferences}
            likedBy={state.likedBy}
            swipeUser={swipeUser}
            profile={false}
          />
        } />

        <Route path='/users/1' element={
          <UserCardContainer 
            user={state.user}
            profile={true}
            editMode={false}
            updateProfile={updateProfile}
          />
        } />

      </Routes>

    </div>
  );
}

export default App;