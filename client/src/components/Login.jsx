import React, { useState } from "react";

export default function Login({ userLogin }) {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(loginInfo);
  };

  return (
    <form onSubmit={loginHandler}>
      <div className="loginForm">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            value={loginInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            value={loginInfo.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}
