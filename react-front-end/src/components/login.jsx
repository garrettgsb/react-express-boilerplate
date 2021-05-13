import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const log = () => {
    axios.post("http://localhost:8080/api/users/login", {
      username: username,
      password: password
    }).then((res) => {
      console.log(res)
    })
    //after this
  }
  
  return (
    <div className="Login">
 
      <div className="LoginForm">
      <h2 className="Title">Login</h2>
        <input type="text" placeholder="email" 
        onChange={(e)=> 
        {setUsername(e.target.value)}}>
        </input>
        <input type="text" placeholder="password"
        onChange={(e)=> 
        {setPassword(e.target.value)}}>
        </input>
        <button onClick={log}>Login</button>
        </div>
    </div>
  );
};

export default Login;
