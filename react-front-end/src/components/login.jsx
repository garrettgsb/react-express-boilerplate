import React from "react";

const Login = (props) => {
  return (
    <div className="Login">
      <h2>Login!</h2>
      <form method="POST" action="/api/users/login">
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
