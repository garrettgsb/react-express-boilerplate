import React from 'react';


const Login = (props) => {
  return (
  <form method="POST" action="/api/users/login">
    <input type="text" placeholder="email"></input>
    <input type="text" placeholder="password"></input>
    <button type="submit">Login</button>
  </form>
  )
}

export default Login;


