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
import AutoComplete from "./AutoComplete";

export default function RegisterRun() {


  const user = useRecoilValue(userState);


  const [runData, setRunData] = useState({
    planner_id: user.id,
    name: "",
    description: "",
    distance: "",
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    date: new Date(),
    file: "",
  });
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({ lat: "", lng: "" });

  const navigate = useNavigate();
  const { createRun } = useAppData();

  const handleChange = (e) => {
    setRunData({ ...runData, [e.target.name]: e.target.value });
  };


  const handleCheckboxChange = (e) => {
    const prev = runData[e.target.name];
    setRunData({ ...runData, [e.target.name]: !prev });
  }

  //form validate
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {

    
    const form = e.currentTarget;
    console.log("check validity", e.target.reportValidity());
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } 
    e.preventDefault();
    createRun({...runData}, address,{...coords});
    setValidated(true)
    if (validated) 
    navigate('/profile')
    //prevent default on btn

    console.log("check validate:", validated)

    
      
    }

  const datePick = () => {
    return (
      <Form.Group controlId="date" className="mb-3">
        <Form.Label>Date</Form.Label>
        <DatePicker
          required
          name="date"
          selected={runData.date}
          onChange={(date) => setRunData({...runData, date: date})}
          key={runData.date}
     
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
              name="distance"
              checked={runData.distance === label}
              onChange={handleChange}
            />
          );
        })}
      </div>
    );
  };

  return (


    <Form className="form-container" encType="multipart/form-data" noValidate validated={validated} onSubmit={handleSubmit}>


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
          name="name"
          value={runData.name}
          onChange={handleChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Enter a name for the run.
        </Form.Control.Feedback>
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
          name="description"
          placeholder="Description"
          value={runData.description}
          onChange={handleChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Write a short description including directions, necessary information,
          etc.
        </Form.Control.Feedback>
      </FloatingLabel>

      <FloatingLabel
        controlId="location"
        label="Where will this run be held?"
        className="mb-3"
      >
        <AutoComplete
          setAddress={setAddress}
          setPlaceName={setPlaceName}
          setCoords={setCoords}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Enter a valid address.
        </Form.Control.Feedback>
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
              key={runData.time}
              type="time"
              name="time"
              placeholder="Time"
              value={runData.time}
              //onChange={(time) => console.log(time.target.value)}
              onChange={(event) => setRunData({...runData, time: event.target.value})}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Enter a valid time.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control
          required
          name="file"
          type="file"
          onChange={handleChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Upload an image for this run.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}
