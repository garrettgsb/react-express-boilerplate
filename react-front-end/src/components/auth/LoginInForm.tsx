import React, { useState } from "react";
import { AuthForm, Input, Button } from "./Auth.components";
// import { localAuthenticate } from "./Auth.api";
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
    // try {
    // await localAuthenticate({ email, password })
    // console.log('>>>', await localAuthenticate({ email, password }))
    // } catch (err) {
    //   return err
    // }
    // await Axios({
    //   method: "post",
    //   url: "/login",
    //   params: {
    //     email: JSON.stringify(email),
    //     password: JSON.stringify(password)
    // }
    Axios.post(`/login/${email},${password}`)
      .then(res => {
        console.log('res after axios req:', res.data)
        if (res.data.error) {
          console.log('Login Error:', res.data.error);
          return setError(res.data.error);
        } else {
          console.log('Login User:', res.data.user);

          setUser(res.data.user)
          // const user = new Router(data as BrowserRouterProps)
          // console.log(window.history)
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