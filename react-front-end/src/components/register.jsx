import React from 'react';


const Register = (props) => {
  return (
  <form method="POST" action="">
    <input type="text" placeholder="name"></input>
    <input type="text" placeholder="email"></input>
    <input type="text" placeholder="password"></input>
    <button type="submit">Register</button>
  </form>
  )
}

export default Register;