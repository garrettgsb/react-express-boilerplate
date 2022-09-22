/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SignInUser.css";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = props;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", { email, password })
      .then((response) => {
        const { user } = response.data;
        if (!user) {
          console.log("User not found.");
          navigate("/");
          return;
        }
        setUser(user);
        navigate("/profile");
      })
      .catch((error) => {
        navigate("/");
        console.log(error.response.status);
      });
  };

  return (
    <>
      <Form className="form-container sign-in" onSubmit={handleSubmit}>
        <div className="form-container-text">
          <Form.Text as="h3">HELLO!</Form.Text>
          <Form.Text as="p">Sign in to see all your running events.</Form.Text>
        </div>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
}
