import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [state, setState] = useState({});
  
  // promise chain for setting initial states
  // Depency: Will likely depend on swiping state
  useEffect(() => {
    Promise.all([
      axios.get('/api/users/1/all'),
      axios.get('/api/users/1'),
      axios.get('/api/users/1/messages'),
      axios.get('/api/users/1/likedBy'),
      axios.get('/api/users/1/matchings')
    ])
    .then((all) => {
      console.log('all', all);
      setState({...state, users: all[0].data, user: all[1].data, messages: all[2].data, likedBy: all[3].data, matches: all[4].data});
    }) 
  }, []);


  // like user
  const swipeUser = (toId, like) => {
    axios.post('/api/users/1/matchings', {toId, like})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

// block user

  const blockUser = (blockId) => {
    axios.post('/api/users/1/blocked', {blockId})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


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


  return (
    <div className="App">
      <button>
        unused button
      </button>        
      <button onClick={() => swipeUser(3, true)}> 
        Post Data       
      </button>        
      <button onClick={() => blockUser(4)}> 
        Block user       
      </button>        

    

      <div>
        <form>
          <label>Username</label>
          <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type='submit' onClick={handleClickLogIn}>
            Log in
          </button> 
        </form>
        <button type='submit' onClick={handleClickLogOut}>
          Sign Out
        </button>
      </div>

    </div>
  );
}

export default App;