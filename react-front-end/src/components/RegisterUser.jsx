/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/RegisterUser.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import useAppData from "../hooks/useAppData";
import Feedback from 'react-bootstrap/Feedback';

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [runner, setRunner] = useState(false);
  const [planner, setPlanner] = useState(false);
  const { registerUser } = useAppData();
  const navigate = useNavigate();

  //validate form
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {

    const form = e.currentTarget;
    if(form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    //setValidated(true);

    //if (setValidated(true)) { 

    const status = registerUser(
      name,
      email,
      password,
      phone,
      age,
      gender,
      runner,
      planner
    );

    if (status && setValidated(true)) navigate("/profile");
    }
  

  // const submit = async (e) => {
  //   e.preventDefault();
  //   const status = await registerUser(
  //     name,
  //     email,
  //     password,
  //     phone,
  //     age,
  //     gender,
  //     runner,
  //     planner
  //   );
   
  //   if (status) navigate("/profile");
  // };
  
  
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
                  name="group1"
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

  const handleOnChange = (setIsChecked) => {
    setIsChecked((prev)=>!prev);
  };

 

  return (
     <Form className="form-container" validated={validated}>
      <div className="form-container-text">
        <Form.Text as="h3">HI THERE, RUNNER!</Form.Text>
        <Form.Text as="p">
          Create an account with us to use weRun and join runs with people from
          all over Canada.
        </Form.Text>
      </div>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="Firstname / Lastname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Enter your name.</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Enter a valid email address.</Form.Control.Feedback>
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
        <Form.Control.Feedback>Cool password!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Enter a valid password.</Form.Control.Feedback>
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel controlId="phone" label="Phone" className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Control.Feedback>Got it!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Enter a valid phone number.</Form.Control.Feedback>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Form.Control.Feedback>You're getting old..</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Enter a valid age.</Form.Control.Feedback>
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
          checked={runner}
          onChange={() => handleOnChange(setRunner)}
        />
        <Form.Check
          inline
          label="Planner"
          type="checkbox"
          id={`inline-checkbox-2`}
          checked={planner}
          onChange={() => handleOnChange(setPlanner)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
}
