import React, { useState } from "react";
import { AuthForm, Input, Button } from "./Auth.components";
import Axios from "axios";
import { Redirect } from "react-router-dom";

interface Credentials {
  email?: string;
  password?: string;
}

interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  facebook?: string;
}

export const LoginInForm = (data: Credentials) => {
  // user input state
  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: ''
  });

  // error state
  const [error, setError] = useState('');

  const [user, setUser] = useState({} as User);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Axios.post(`/login/${email},${password}`)
      .then(res => {
        if (res.data.error) {
          return setError(res.data.error);
        } else {
          setUser(res.data.user)
        }
      }).catch(err => console.log(err))
  };

  return (
    !!user.id ? <Redirect to='/explore' /> : <AuthForm onSubmit={login}>
      <h1>Login In</h1>
      <Input
        placeholder="Enter Email"
        value={email}
        onChange={e => setCredentials({
          email: e.target.value,
          password
        })}
        required
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setCredentials({
          email,
          password: e.target.value
        })}
        required
      />
      <Button type="submit">Login In</Button>
      {error.length > 0 && <p>{error}</p>}
    </AuthForm>
  );
};