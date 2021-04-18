import React, { useState, useContext, useEffect } from 'react';
import { authContext } from '../../AuthProvider';
import { MeetupsContext } from '../../MeetupsContext'
import axios from 'axios';
import moment from 'moment'

//request user for login
async function loginUser(credentials) {
  axios.post('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: JSON.stringify(credentials)
  })
    .then(data => console.log('data from client:', data))
}

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(authContext);

  const { meetup, setMeetup } = useContext(MeetupsContext);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     email,
  //     password
  //   });
  //   setToken(token);
  // }

  const startEvent = {id: 900, name: 'Banff', date: moment(Date()).format("YYYY-MM-DD"), time: moment(Date()).format("HH:MM:SS")}

  function setMeetupToEvent() {
    setMeetup(startEvent)
  }

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
    setMeetupToEvent();
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

// return (
//   <div className="login-wrapper">
//     <h1>Please Log In</h1>
//     <form onSubmit={handleSubmit}>
//       <label>
//         <p>Email</p>
//         <input type="text" onChange={e => setEmail(e.target.value)}/>
//       </label>
//       <label>
//         <p>Password</p>
//         <input type="password" onChange={e => setPassword(e.target.value)}/>
//       </label>
//       <div>
//         <button type="submit">Login</button>
//       </div>
//     </form>
//   </div>
// )