import { useState } from 'react';
// import axios from 'axios';

export default function useEntryData() {

  const [ state, setState ] = useState({
    title: "", entry: "", mood: null
  });

  
  const submitEntry = () => {
    
    console.log("STATE ", state);

    // axios.post('api/entries', {state}) 
    //   .then(res => console.log("POST", res.data))
    //   .catch(err => console.log("ERROR", err));
  }

  const titleData = (title) => {
    setState({...state, title});
  };

  const entryData = (entry) => {
    setState({...state, entry});
  };

  const moodData = (mood) => {
    setState({...state, mood});
  };


  return { titleData, entryData, moodData, submitEntry };

}
