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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`
  );
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState("");
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { createRun } = useAppData();

  const datePick = () => {
    return (
      <Form.Group controlId="date" className="mb-3">
        <Form.Label>Date</Form.Label>
        <DatePicker
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

  const create = async (e) => {
    e.preventDefault();
    const status = await createRun(user.id, name, description, location, distance, time, date, file);
    if (status) navigate("/profile");
  };

  return (
    <Form className="form-container" encType="multipart/form-data">
      <div className="form-container-text">
        <Form.Text as="h3">Create a Run</Form.Text>
        <Form.Text as="p">
          Don't see a run event near you? Just tell us where and when and the
          rest is on us.
        </Form.Text>
      </div>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="description"
        label="Description"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="location" label="Address" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
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
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => create(e)}>
        Create
      </Button>
    </Form>
  );
}
