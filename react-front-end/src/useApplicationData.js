import axios from 'axios';
import { useState } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    avatar: "https://cdn.pixabay.com/photo/2017/02/01/00/26/cranium-2028555_960_720.png",
    url: "",
    user: ""
  });

  const fetchData = () => {
    axios.get(state.url) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      console.log(state.user)
      setState(prev => ({
        ...prev, avatar: response.data.avatar_url
      }));
    }) 
  }

  const setURL = (e) => {
    e.preventDefault();
    setState( prev =>( {...prev, url: `https://api.github.com/users/${state.user}`
  }));
  }

  const setUser = (event) => {
    setState({user: event.target.value
    });
    console.log(state.user)
  }

  return { setUser, setURL, fetchData, state};
}

// setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));