import axios from 'axios';
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    avatar: "https://cdn.pixabay.com/photo/2017/02/01/00/26/cranium-2028555_960_720.png",
    loginUser:"",
    name:"",
    url: "",
    repoUrl: "",
    user: "",
    repositories: [{ "name": "hello"}]
  });
  useEffect(()=>{
    setState( prev =>( {...prev, url: `https://api.github.com/users/${state.user}`, repoUrl: `https://api.github.com/users/${state.user}/repos`}))
  },[state.user])
  
  const fetchData = (e) => {
    e.preventDefault();
    Promise.all([
      axios.get(state.url), // You can simply make your requests to “/api/whatever you want”
      axios.get(state.repoUrl)
    ])
    .then((all) => {
      console.log(all[1].data[0].name)
      setState(prev => ({
        ...prev, avatar: all[0].data.avatar_url, loginUser: all[0].data.login, name: all[0].data.name, repositories: all[1].data 
      }));
    })  
  }
  // const setURL = (e) => {
  //   e.preventDefault();
  //   setState( prev =>( {...prev, url: `https://api.github.com/users/${state.user}`
  // }));
  // }

  // const fetchLanguages = (repository) => {
  //   const languagesArr = [];
  //   const languageObj = axios.get(`https://api.github.com/repos/${state.user}/${repository}/languages`)
  //   languagesArr.push(languageObj)
  //   return Object.keys(languagesArr[0])
  // }

  const setUser = (event) => {
    setState({...state,user: event.target.value
    });
    console.log(state.user)
  }

  return { setUser, fetchData, state};
}

// setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));