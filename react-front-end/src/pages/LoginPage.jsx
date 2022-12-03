import { AuthContext } from '../App';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/home.css';
import axios from 'axios';

export default function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const user = React.useContext(AuthContext);

  //Submit Button: onClick, make API Call then on success, onClick={props.setToken(id from API call)}

  const navigateHome = useNavigate()

  const login = () => {

    axios.post('/api/login', {
      name: username,
      password: password
    })
      .then(function(response) {
        console.log('This is the response data:', response.data);
        if (!response.data) {
          setError(`Username or password are incorrect`);
          throw new Error(`Username or password are incorrect`);
        }
        props.setUser(response.data);
        navigateHome('/')
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  return (
    <main className="main_page">
      <section className="main_section">
        <div>
          <label>
            <p>Username:</p>
            <input type="text" name="name" placeholder={'Username'} value={username} onChange={(e) => { setUsername(e.target.value); }} />
          </label>
          <label>
            <p>Password:</p>
            <input type="password" name="password" placeholder={'Password'} value={password} onChange={(e) => { setPassword(e.target.value); }} />
          </label>
          <div>
            <button onClick={login}>Login</button>
          </div>
        </div>
        <div>{error && <p>{error}</p>}</div>
      </section>
    </main>
  );
}