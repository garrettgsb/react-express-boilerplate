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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [runner, setRunner] = useState("");
  const [planner, setPlanner] = useState("");

  const genderSelector = () => {
    return (
      <>
        <Form.Text id="profileHelpBlock" muted>
          Gender:
        </Form.Text>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
          aria-describedby="profileHelpBlock"
        >
          {["he/Him", "she/Her", "they/Them", "I prefer not to say"].map(
            (label, index) => {
              return (
                <Form.Check
                  inline
                  key={label}
                  label={label}
                  type="radio"
                  id={`inline-radio-${index}`}
                  value={label}
                  onChange={(e) => setGender(e.target.value)}
                />
              );
            }
          )}
        </Form.Group>
      </>
    );
  };
  
  return (
    <Form className="form-container">
      <div className="form-container-text">
        <Form.Text as="h3">HELLO!</Form.Text>
        <Form.Text as="p">
          Create an account with us to use weRun and join runs with people from
          all over Canada.
        </Form.Text>
      </div>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Firstname / Lastname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
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
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FloatingLabel>{" "}
        </Col>
      </Row>

      {genderSelector()}
      <Form.Text id="profileHelpBlock" muted>
        Pick atleast 1:
      </Form.Text>
      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
        aria-describedby="profileHelpBlock"
      >
        <Form.Check
          inline
          label="Runner"
          type="checkbox"
          id={`inline-checkbox-1`}
          value="Runner"
          onChange={(e) => setRunner(true)}
        />
        <Form.Check
          inline
          label="Planner"
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
