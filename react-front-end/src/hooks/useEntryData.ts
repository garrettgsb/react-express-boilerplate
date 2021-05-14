// to resolve error "Expected an assignment or function call and instead saw an expression"
/* eslint-disable */


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

  function titleData(title) {prev => {

    setState({...prev, title});
  }};

  function contentData(content) {prev => {

    setState({...prev, content});
  }};

  function moodData(mood) {prev => {

    setState({...prev, mood});
  }};

  function privacyData(val) {prev => {
    setState({...prev, privacy: val})
  }};


  return { titleData, contentData, moodData, privacyData, submitEntry };

}
