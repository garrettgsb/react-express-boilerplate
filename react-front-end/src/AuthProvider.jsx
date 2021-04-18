import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState("");
  const [user, setUser] = useState({ email: "", name: "", });

  // Perform login process for the user & save authID, etc
  const login = function (email, password) {
    axios.post('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: JSON.stringify({email: email, password: password})
      // credentials: JSON.stringify(credentials)
    })
      .then((data) => { 
        console.log(data)
        if(data.data === '') {
        alert('Sorry, the email or password is not valid')
      } else {
        console.log('All good')
        setUser({ email, id});
        setAuth(true);
      }
    })
  }
    // console.log('am i hitting here')
    // const id = uuid();
  // };

  const logout = function (email, password) {
    setUser({ email: "", name: "" });
    setId(uuid());
    setAuth(false);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};

export const authContext = createContext();