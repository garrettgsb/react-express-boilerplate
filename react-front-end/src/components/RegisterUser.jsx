/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/RegisterUser.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RegisterUser() {
  return (
    <Form className="form-container">
      <div className="form-container-text">
        <Form.Text as="h3">HELLO!</Form.Text>
        <Form.Text as="p">
          Create an account with us to use weRun and join runs with people from
          all over Canada.
        </Form.Text>
      </div>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Firstname / Lastname" />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel
            controlId="phone"
            label="Phone"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Phone" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="age" label="Age" className="mb-3">
            <Form.Control type="text" placeholder="Age" />
          </FloatingLabel>{" "}
        </Col>
      </Row>

      <Form.Text id="profileHelpBlock" muted>
        Gender:
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" aria-describedby="profileHelpBlock">
        <Form.Check
          inline
          label="he/Him"
          name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="she/Her"
          name="group1"
          type="radio"
          id={`inline-radio-2`}
        />
        <Form.Check
          inline
          label="they/Them"
          name="group1"
          type="radio"
          id={`inline-radio-3`}
        />
        <Form.Check
          inline
          label="I prefer not to say"
          name="group1"
          type="radio"
          id={`inline-radio-4`}
        />
      </Form.Group>

      <Form.Text id="profileHelpBlock" muted>
        Pick atleast 1:
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" aria-describedby="profileHelpBlock">
        <Form.Check
          inline
          label="Runner"
          name="group2"
          type="checkbox"
          id={`inline-checkbox-1`}
        />
        <Form.Check
          inline
          label="Planner"
          name="group2"
          type="checkbox"
          id={`inline-checkbox-2`}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
