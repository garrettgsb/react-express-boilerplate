import React, { useState } from "react";
import { AuthForm, Input, Button } from "./Auth.components";
import { onLogin } from "./Auth.api";

export const LoginInForm = () => {

  // user input state
  const [{ email, password }, setCredntials] = useState({
    email: '',
    password: ''
  });

  // error state
  const [error, setError] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await onLogin({
      email,
      password
    })

    if (response && response.error) {
      setError(response.error);
    }
  };

  return (
    <AuthForm onSubmit={login}>
      <h1>Login In</h1>
      <Input placeholder="Enter Email" value={email} onChange={e => setCredntials({
        email: e.target.value,
        password
      })} />
      <Input placeholder="Password" type="password" value={password} onChange={e => setCredntials({
        email,
        password: e.target.value
      })} />
      <Button type="submit">Login In</Button>
      {error.length > 0 && <p>{error}</p>}
    </AuthForm>
  );
};