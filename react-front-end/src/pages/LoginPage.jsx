import { AuthContext } from '../App';
import React, { useState } from "react";
import './styles/home.css';
import axios from 'axios';

export default function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = React.useContext(AuthContext);

  //Submit Button: onClick, make API Call then on success, onClick={props.setToken(id from API call)}

  const login = () => {
    // console.log('hey');
    axios.post('/api/login', {
      name: username,
      password: password
    })
    .then(function (response) {
      console.log(response.data);
      props.setUser(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    // props.setUser({});
  };

  return (
    <main className="main_page">
      <section className="main_section">
        <div>
          <label>
            <p>Username:</p>
            <input type="text" name="name" placeholder={'Username'} value={username} onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <label>
            <p>Password:</p>
            <input type="password" name="password" placeholder={'Password'} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <div>
            <button  onClick={login}>Login</button>
          </div>
        </div>
      </section>
    </main>
  );
}