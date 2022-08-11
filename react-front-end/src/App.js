import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserCardContainer from './components/UserCardContainer';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/login-form'
import Nav from "./components/Nav";
import Matches from "./components/Matches";
////// divide socetIO part
import io from 'socket.io-client';
const socket = io();
//////

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [state, setState] = useState({});
  const [allMessages, setAllMessages] = useState([]);
  const [messageSent, setMessageSent] = useState(false);
  const [preferences, setPreferences] = useState({});
  const [matches, setMatches] = useState([])
  const [swipeHistory, setSwipeHistory] = useState([]);

  // SOCKET PART
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

////////
useEffect(() => {
  socket.on('connect', () => {
    console.log(socket.id)
    setIsConnected(true);
  });

  socket.on('disconnect', () => {
    setIsConnected(false);
  });

  socket.on('pong', () => {
    
    setLastPong(new Date().toISOString());
  });

  return () => {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('pong');
  };
}, []);

const sendPing = () => {
  socket.emit('ping');
}



//******************
  //////////////////////////////

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
      axios.get('/api/users/1/likedBy')
    ])
    .then((all) => {
      setState({...state, 
        users: all[0].data, 
        user: all[1].data, 
        likedBy: all[2].data});
    }) 
    // Discusss if we need cleanUp for Effect Hook
    // return () => axios.isCancel()
  }, []);

  // Getting list of all messages
  useEffect(() => {
    axios.get('/api/users/1/messages')
      .then((msgs) => {
        setAllMessages([...msgs.data])
      });
  }, [messageSent]);

  // Getting users current preferences settings
  useEffect(() => {
    axios.get('/api/users/1/preferences')
      .then((results) => {
        setPreferences({...results.data});
      })
  }, []);

  // Getting list of confirmed matches
  useEffect(() => {
    axios.get('/api/users/1/matchings')
      .then((matches) => {
        setMatches([...matches.data]);
      })
      // return () => axios.isCancel()
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

  // Update users preferences
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

  // block a user
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

  // Updating user profile 
  const updateProfile = (newValues) => {
    const newProfileValues = newValues;
    console.log('newvalues from newProfileValues', newProfileValues);
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



  // delete
  //
  //
  //
  const sendMessage = (msgData) => {
    console.log('you clicked to send the msg', msgData);
    axios.post('/api/users/1/messages/new', msgData)
      .then((results) => {
        console.log('new msg from db', results.data);
        const msgFetchTrigger = props.messageSent;
        //
        socket.emit("sendMessage", { message })
        //
        props.setMessageSent(!msgFetchTrigger);
               setMessage('');
      })
      .then()
      .catch((error) => console.log('error:', error));
  };
  //
  //
  //
  // delete
  //

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
                <Matches state={state} matches={matches} allMessages={allMessages} setAllMessages={setAllMessages} messageSent={messageSent} setMessageSent={setMessageSent}/>
              </>
        } />

      </Routes>
      <div>
      <p>Connected: { '' + isConnected }</p>
      <p>Last pong: { lastPong || '-' }</p>
      <button onClick={ sendPing }>Send ping</button>
      <button onClick={ s }>Send ping</button>
    </div>
    </div>
    
  );
}

export default App;