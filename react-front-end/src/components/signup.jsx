import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Box, Typography } from '@mui/material';


const SignUp = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateUserName = (event) => {
    setUserName(event.target.value);
  }

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  const updateEmail = (event) => {
    setEmail(event.target.value);
  }

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const updateLastName = (event) => {
    setLastName(event.target.value);
  }

  const updatePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleSignUp = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/users/signup";
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        userName: userName,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }

    const response = await fetch(URL, settings);
    const data = await response.json();
    console.log(data);

    // Handle signup success or error

    // After successful signup, navigate to the home page 
    navigate('/Home');
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" className="text-primary">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            autoComplete="username"
            autoFocus
            value={userName}
            onChange={updateUserName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={updatePassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={updateEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={updateFirstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={updateLastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="tel"
            value={phoneNumber}
            onChange={updatePhoneNumber}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="submit-button"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
