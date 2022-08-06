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
      axios.get('/api/users/1/matchings'),
      axios.get('/api/users/1/preferences')
    ])
    .then((all) => {
      console.log('all', all);
      setState({...state, 
        users: all[0].data, 
        user: all[1].data, 
        messages: all[2].data, 
        likedBy: all[3].data, 
        matches: all[4].data, 
        preferences: all[5].data});
    }) 
  }, []);

  const swipeUser = (toId, like) => {
    axios.post('/api/users/1/matchings', {toId, like})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const updatePreferences = (min_age, max_age, location, min_height_in_cm, max_height_in_cm, genders, drinks, exercise, dating_goals) => {
    const newPref = {
      ...state.preferences,
      min_age, max_age, location, min_height_in_cm, max_height_in_cm, genders, drinks, exercise, dating_goals
    };
    setState({...state, preferences: newPref});
    
    axios.post('/api/users/1/preferences', state.preferences)
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <button>
        unused button
      </button>        
      <button onClick={() => swipeUser(3, true)}> 
        Post Data       
      </button>
      <button onClick={() => updatePreferences(18, 30, 'Las Vegas', 175, 188, 2, 1, 3, 3)}>
        Set Preferences  
      </button>
    </div>
  );
}

export default App;