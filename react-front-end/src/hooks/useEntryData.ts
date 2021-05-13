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

  const titleData = (title) => {prev => {

    setState({...prev, title});
  }};

  const entryData = (entry) => {prev => {

    setState({...prev, entry});
  }};

  const moodData = (mood) => {prev => {

    setState({...prev, mood});
  }};


  return { titleData, entryData, moodData, submitEntry };

}
