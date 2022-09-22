/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/RegisterUser.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SignIn() {
  return (
    <Form className="form-container">
      <div className="form-container-text">
        <Form.Text as="h3">HELLO!</Form.Text>
        <Form.Text as="p">Sign in to see all your running events.</Form.Text>
      </div>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <Form.Text as="p" muted>Have an account already? Sign in</Form.Text>
    </Form>
  );
}
