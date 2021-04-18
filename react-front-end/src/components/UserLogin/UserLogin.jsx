import React, { useState, useContext, useEffect } from 'react';
import { authContext } from '../../AuthProvider';
import '../Button.scss';
import '../../App.scss';
import './UserLogin.scss';
import axios from 'axios';

//request user for login
// async function loginUser(credentials) {
//   console.log('creds: ', credentials)
//   axios.post('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: JSON.stringify(credentials)
//   })
//     .then(data => console.log('data from client:', data))
// }

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(authContext);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     email,
  //     password
  //   });
  //   setToken(token);
  // }


  const onEmailChange = function(event) {
    setEmail(event.target.value);
  }

  const onPasswordChange = function(event) {
    setPassword(event.target.value);
  }

  const onSubmit = function(event) {
    event.preventDefault();
    if (email)
      login(email, password);
  }

  useEffect(() => {
    setPassword('');
    setEmail('');
  }, [])

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="login"
            value={email} placeholder="Email Address"
            onChange={onEmailChange} />
        </p>
        <p>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={onPasswordChange} />
        </p>
        <p className="submit">
          <input type="submit" name="commit" value="Login" />
        </p>
      </form>
    </div>
  );

}
export default UserLogin;