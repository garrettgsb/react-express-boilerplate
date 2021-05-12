import { useState } from 'react';
import axios from 'axios';

export default function useEntryData() {

  const [ state, setState ] = useState({
    title: "", entry: "", mood: null
  });

  console.log("STATE ", state);

  const submitEntry = () => {
  
    axios.post('api/entries', {state}) 
      .then(res => console.log("POST", res.data))
      .catch(err => console.log("ERROR", err));
  }

  const titleData = (title) => {
    setState(title);
  };

  const entryData = (entry) => {
    setState(entry);
  };

  const moodData = (mood) => {
    setState(mood);
  };


  return { titleData, entryData, moodData, submitEntry };

}
