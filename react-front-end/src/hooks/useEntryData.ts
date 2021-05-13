import { useState } from 'react';
// import axios from 'axios';

export default function useEntryData() {

  const [ state, setState ] = useState({
    title: "", content: "", mood: null, privacy: true
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

  const contentData = (content) => {prev => {

    setState({...prev, content});
  }};

  const moodData = (mood) => {prev => {

    setState({...prev, mood});
  }};

  const privacyData = (val) => {prev => {
    setState({...prev, privacy: val})
  }}


  return { titleData, contentData, moodData, privacyData, submitEntry };

}
