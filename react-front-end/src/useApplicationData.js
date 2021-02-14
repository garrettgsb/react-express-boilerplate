import axios from 'axios';
import { useState, useEffect } from "react";

//---------------UNCOMMENT IF USING BACKUP DATA----------------
// import {userData, repoData} from "./backupData.js"


export default function useApplicationData() {
  const [state, setState] = useState({
    avatar: "https://cdn.pixabay.com/photo/2017/02/01/00/26/cranium-2028555_960_720.png",
    loginUser:"",
    name:"",
    url: "",
    repoUrl: "",
    user: "",
    repositories: [{ "name": "hello", "created_at": "2020-04-12T21:56:45Z"}]
  });
  useEffect(()=>{
    setState( prev =>( {...prev, url: `https://api.github.com/users/${state.user}`, repoUrl: `https://api.github.com/users/${state.user}/repos`}))
  },[state.user])
  
  //------------COMMENT OUT THIS FETCHDATA IF USING BACKUP DATA--------------
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

  //--------------UNCOMMENT TO USE FOR BACKUP DATA--------------------------
  // const fetchData = (e) => {
  //   e.preventDefault();
  //     setState(prev => ({
  //       ...prev, avatar: userData.avatar_url, loginUser: userData.login, name: userData.name, repositories: repoData 
  //     }));
    
  // }

  const setUser = (event) => {
    setState({...state,user: event.target.value
    });
    console.log(state.user)
  }

  return { setUser, fetchData, state};
}