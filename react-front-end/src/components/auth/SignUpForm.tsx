import React, { useState } from "react";
import { AuthForm, Input, Button } from "./Auth.components";
import Axios from "axios";
import { Redirect } from "react-router-dom";

interface Credentials {
  firstname?: string;
  lastname?: string;
  email?: string;
  facebook?: string;
  password?: string;
}

interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  facebook?: string | null;
  password?: string;
}

export const SignUpForm = (data: Credentials) => {
  // user input state
  const [{ firstname, lastname, email, facebook, password }, setCredentials] = useState({
    firstname: '',
    lastname: '',
    email: '',
    facebook: '',
    password: ''
  });

  // error state
  const [error, setError] = useState('');

  const [user, setUser] = useState({} as User);

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Axios.post(`/signup`, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      facebook: facebook,
      password: password
    })
      .then(res => {
        if (res.data.error) {
          return setError(res.data.error);
        } else {
          localStorage.setItem('userID', res.data.user);
          setUser(res.data.user)
        }
      }).catch(err => console.log(err))
  };

  return (
    !!user.id ? <Redirect to='/explore' /> :
      <AuthForm onSubmit={signup}>
        <h1>Sign Up</h1>
        <Input
          placeholder="First Name"
          value={firstname}
          onChange={e => setCredentials({
            firstname: e.target.value,
            lastname,
            email,
            facebook,
            password
          })}
          required
        />
        <Input
          placeholder="Last Name"
          value={lastname}
          onChange={e => setCredentials({
            firstname,
            lastname: e.target.value,
            email,
            facebook,
            password
          })}
          required
        />
        <Input
          placeholder="Enter Email"
          value={email}
          onChange={e => setCredentials({
            firstname,
            lastname,
            email: e.target.value,
            facebook,
            password
          })}
          required
        />
        <Input
          placeholder="Facebook"
          value={facebook}
          onChange={e => setCredentials({
            firstname,
            lastname,
            email,
            facebook: e.target.value,
            password
          })}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setCredentials({
            firstname,
            lastname,
            email,
            facebook,
            password: e.target.value
          })}
          required
        />
        <Button type="submit">Sign Up</Button>
        {error.length > 0 && <p>{error}</p>}
      </AuthForm>
  );
};