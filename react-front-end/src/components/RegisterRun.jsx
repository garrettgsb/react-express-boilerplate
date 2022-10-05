/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/RegisterUser.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState, runsState } from "../hooks/useAppData";
import useAppData from "../hooks/useAppData";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterRun() {
  const [runData, setRunData] = useState({
    name: "",
    description: "",
    location: "",
    distance: "",
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    date: new Date(),
    file: ""
  });
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [location, setLocation] = useState("");
  // const [distance, setDistance] = useState("");
  // const [time, setTime] = useState(
  //   `${new Date().getHours()}:${new Date().getMinutes()}`
  // );
  // const [date, setDate] = useState(new Date());
  // const [file, setFile] = useState("");
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { createRun } = useAppData();

  const handleChange = (e) => {
    setRunData({...runData, [e.target.name]: e.target.value });
  }

  const handleCheckboxChange = (e) => {
    const prev = runData[e.target.name]
    setRunData({...runData, [e.target.name]: !prev})
  }


  //form validate
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValidated(true)

    createRun(runData);
    setRunData({    
    name: "",
    description: "",
    location: "",
    distance: "",
    time: "",
    date: "",
    file: "" })
    navigate('/profile');
  } 
  


  const datePick = () => {
    return (
      <Form.Group controlId="date" className="mb-3">
        <Form.Label>Date</Form.Label>
        <DatePicker
          required
          className="date-picker"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </Form.Group>
    );
  };

  const distanceSelector = () => {
    return (
      <div className="mb-3">
        {[2, 5, 10].map((label) => {
          return (
            <Form.Check
              required
              key={label}
              inline
              type="radio"
              id={`inline-radio-1`}
              label={`${label}k`}
              value={label}
              onChange={(e) => setDistance(e.target.value)}
            />
          );
        })}
      </div>
    );
  };

 



  return (
    <Form className="form-container" encType="multipart/form-data" validated={validated}>
      <div className="form-container-text">
        <Form.Text as="h3">Create a Run</Form.Text>
        <Form.Text as="p">
          Don't see a run event near you? Just tell us where and when and the
          rest is on us.
        </Form.Text>
      </div>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Enter a name for the run.</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel
        controlId="description"
        label="Description"
        className="mb-3"
      >
        <Form.Control
          required
          as="textarea"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Write a short description including directions, necessary information, etc.</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="location" label="Address" className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="Address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Enter a valid address.</Form.Control.Feedback>
      </FloatingLabel>

      <Form.Group controlId="distance" className="mb-3">
        <Form.Label>Distance</Form.Label>
        {distanceSelector()}
      </Form.Group>

      <Row>
        <Col>{datePick()}</Col>
        <Col>
          <Form.Group controlId="time" className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              required
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Enter a valid time.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control
          required
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Upload an image for this run.</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Create
      </Button>
    </Form>
  );
}
