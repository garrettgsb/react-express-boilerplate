import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const log = () => {
    axios.post("http://localhost:3002/api/users/login", {
      username: username,
      password: password
    }).then((res) => {
      console.log(res)
    })
  }
  
  return (
    <div className="Login">
      <h2>Login!</h2>
      <form method="POST" action="/api/users/login">
        <input type="text" placeholder="email" 
        onChange={(e)=> 
        {setUsername(e.target.value)}}>
        </input>
        <input type="text" placeholder="password"
        onChange={(e)=> 
        {setPassword(e.target.value)}}>
        </input>
        <button onClick={log}>Login</button>
      </form>
    </div>
  );
};

export default Login;
