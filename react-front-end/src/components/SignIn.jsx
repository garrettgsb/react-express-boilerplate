/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate, Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import useAppData from "../hooks/useAppData";
import { userState } from "../hooks/useAppData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/RegisterUser.css";

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAppData();
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
    .then((status)=>{
      status && navigate(`/profile`);
    })
  };

  return (
    <div className="forms">
      <Form className="form-container sign-in text-center" onSubmit={handleSubmit}>
        <div className="form-container-text">
          <Form.Text as="h3">WELCOME BACK, RUNNER!</Form.Text>
          <Form.Text as="p">Sign in to see all your running events.</Form.Text>
        </div>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            required
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
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <Button variant="custom" type="submit" className="btn">
          Sign In
        </Button>
        <Form.Text as="div" className="text-center mb-2 mt-4">Don't have an account? Create one <Link to="/register">here</Link>.</Form.Text>
      </Form>
    </div>
  );
}
