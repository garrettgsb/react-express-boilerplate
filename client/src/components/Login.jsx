import React, { useState } from "react";
import './Login.scss'

export default function Login({ onLogin }) {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const loginHandler = (e) => {
    e.preventDefault();
    onLogin(loginInfo);
  };

  return (
    <form onSubmit={loginHandler}>
      <div className="login">
        <div className="login--inner">
        <h2>Login</h2>
        <div className="login--inner--values">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            value={loginInfo.email}
          />
        </div>
        <div className="login--inner--values">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            value={loginInfo.password}
          />
        </div>
        <div className="login--inner--forgot">
          FORGOT YOUR PASSWORD?
        </div>
        </div>
        <div className="login--buttons">
          <button className="login--buttons--left">Register</button>
          <button className="login--buttons--right" type="submit" value="Sign">Sign In</button>
        </div>
        
      </div>
    </form>
  );
}
