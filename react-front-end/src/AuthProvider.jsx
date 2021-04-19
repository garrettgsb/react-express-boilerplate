import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState("");
  const [user, setUser] = useState({ email: "", name: "", id: "" });

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
        if(data.data === '') {
        alert('Sorry, the email or password is not valid')
      } else {
        setId(uuid())
        setUser({ email, id: data.data.id});
        setAuth(true);
      }
    })
  }

  const logout = function (email, password) {
    setUser({ email: "", name: "" });
    setId(uuid());
    setAuth(false);
  };
  
  // authContext will expose these items
  const userData = { auth, user, login, logout };
  console.log('userrrrrr: ', userData)

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};

export const authContext = createContext();