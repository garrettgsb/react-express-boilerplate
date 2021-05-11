import React, { useState } from "react";
import axios from 'axios';

const Register = (props) => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [nameReg, setNameReg] = useState('');

  const reg = () => {
    console.log('test', nameReg)
    axios.post('http://localhost:3002/api/users/register', {
      name: nameReg,
      username: usernameReg,
      password: passwordReg
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="Register">
      <h2>Register!</h2>
        <input type="text" placeholder="name"onChange={(e)=> 
        {setNameReg(e.target.value)}}></input>
        <input type="text" placeholder="email"onChange={(e)=> 
        {setUsernameReg(e.target.value)}}></input>
        <input type="text" placeholder="password"onChange={(e)=> 
        {setPasswordReg(e.target.value)}}></input>
        <button onClick={reg}>Register</button>
    </div>
  );
};

export default Register;
