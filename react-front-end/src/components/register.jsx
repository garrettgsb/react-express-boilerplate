import React from "react";

const Register = (props) => {
  return (
    <div className="Register">
      <h2>Register!</h2>
      <form method="POST" action="">
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
