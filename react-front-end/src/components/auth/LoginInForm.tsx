import React, { useState } from "react";
import { AuthForm } from "./Auth.components";
import { onLogin } from "./Auth.api";

export const LoginInForm = () => {

  // user input state
  const [{ username, password }, setCredntials] = useState({
    username: "",
    password: ""
  });

  // error state
  const [error, setError] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await onLogin({
      username,
      password
    })

    if (response && response.error) {
      setError(response.error);
    }
  };

  return (
    <AuthForm onSubmit={login}>
      <label htmlFor="username">Username</label>
      <input placeholder="Username" value={username} onChange={e => setCredntials({
        username: e.target.value,
        password
      })} />
      <label htmlFor="password">Password</label>
      <input placeholder="Password" type="password" value={password} onChange={e => setCredntials({
        username,
        password: e.target.value
      })} />
      <button type="submit">Login In</button>
      {error.length > 0 && <p>{error}</p>}
    </AuthForm>
  );
};