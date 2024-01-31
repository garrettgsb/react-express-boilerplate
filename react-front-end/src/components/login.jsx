import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
} from "@mui/material";
import "../styles/login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const updateField = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const endpoint = isLogin
      ? "/api/users/login"
      : "/api/users/signup";
    const URL = `http://localhost:8080${endpoint}`;

    const userData = {
      userName,
      password,
      ...(isLogin ? {} : { email, firstName, lastName, phoneNumber }),
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.error("Authentication failed: Invalid credentials");
        } else {
          console.error(
            `Network response was not ok (status: ${response.status})`
          );
        }
        return;
      }

      const data = await response.json();

      if (isLogin) {
        console.log("Navigating to home page");
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);
      } else {
        console.log("Signup Successful: ", data.message);
        navigate("/Home"); // navigate to home page when successfully signup
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          className="text-primary"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{ mt: 1 }}
        >
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
            onChange={updateField(setUserName)}
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
            onChange={updateField(setPassword)}
          />

          {!isLogin && (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={updateField(setEmail)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                value={firstName}
                onChange={updateField(setFirstName)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="lastName"
                label="Last Name"
                id="lastName"
                value={lastName}
                onChange={updateField(setLastName)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                id="phoneNumber"
                value={phoneNumber}
                onChange={updateField(setPhoneNumber)}
              />
            </>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="submit-button"
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Button
            onClick={toggleForm}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          >
            {isLogin ? "Switch to Sign Up" : "Switch to Login"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
