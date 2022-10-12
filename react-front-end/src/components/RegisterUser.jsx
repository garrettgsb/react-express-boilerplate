/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/RegisterUser.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navigate, useNavigate } from "react-router-dom";
import useAppData from "../hooks/useAppData";
import Feedback from "react-bootstrap/Feedback";

export default function RegisterUser() {
  
  const [buttonPressed, setButtonPressed] = useState(false);

  const { registerUser } = useAppData();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    runner: false,
    planner: false,
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const prev = userData[e.target.name];
    setUserData({ ...userData, [e.target.name]: !prev });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userData);
    navigate("/profile");
  };

  const genderSelector = () => {
    return (
      <>
        <Form.Text id="profileHelpBlock" muted>
          Gender:
        </Form.Text>
        <Form.Group
          name="gender"
          className="mb-3"
          controlId="formBasicCheckbox"
          aria-describedby="profileHelpBlock"
        >
          {["he/Him", "she/Her", "they/Them", "I prefer not to say"].map(
            (label, index) => {
              return (
                <Form.Check
                  required
                  inline
                  key={label}
                  label={label}
                  name="gender"
                  type="radio"
                  id={`inline-radio-${index}`}
                  value={label}
                  checked={userData.gender === label}
                  onChange={handleChange}
                />
              );
            }
          )}
        </Form.Group>
      </>
    );
  };

  return (
    <div className="forms">
      <Form
        className="form-container"
        onSubmit={handleSubmit}
      >
        <div className="form-container-text">
          <Form.Text as="h3">HI THERE, RUNNER!</Form.Text>
          <Form.Text as="p">
            Create an account with us to use weRun and join runs with people
            from all over Canada.
          </Form.Text>
        </div>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            required
            type="text"
            placeholder="Firstname / Lastname"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Enter your name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="name@example.com"
            value={userData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Enter a valid email address.
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Cool password!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Enter a valid password.
          </Form.Control.Feedback>
        </FloatingLabel>
        <Row>
          <Col>
            <FloatingLabel controlId="phone" label="Phone" className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Got it!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter a valid phone number.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Age"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Age"
                name="age"
                value={userData.age}
                onChange={handleChange}
              />
              <Form.Control.Feedback>
                You're getting old..
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter a valid age.
              </Form.Control.Feedback>
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
            //value="runner"
            type="checkbox"
            id={`inline-checkbox-1`}
            name="runner"
            checked={userData.runner}
            onChange={handleCheckboxChange}
          />
          <Form.Check
            inline
            label="Planner"
            type="checkbox"
            id={`inline-checkbox-2`}
            name="planner"
            // value=""
            checked={userData.planner}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
       
        <Button variant="custom" type="submit" className="btn">
          Submit
        </Button>
      </Form>
    </div>
  );
}
