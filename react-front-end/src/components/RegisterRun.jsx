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
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterUser() {
  const datePick = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <Form.Group controlId="date" className="mb-3">
        <Form.Label>Date</Form.Label>
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </Form.Group>
    );
  };

  const distance = () => {
    return (
      <div className="mb-3">
        {["2k", "5k", "10k"].map((label) => {
          return (
            <Form.Check
              key={label}
              inline
              name="group1"
              type="radio"
              id={`inline-radio-1`}
              label={label}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Form className="form-container">
      <div className="form-container-text">
        <Form.Text as="h3">Create a Run</Form.Text>
        <Form.Text as="p">
          Don't see a run event near you? Just tell us where and when and the
          rest is on us.
        </Form.Text>
      </div>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel controlId="description" label="Description" className="mb-3">
        <Form.Control as="textarea" type="text" placeholder="Description" />
      </FloatingLabel>
      <FloatingLabel controlId="location" label="Address" className="mb-3">
        <Form.Control type="text" placeholder="Address" />
      </FloatingLabel>

      <Form.Group controlId="distance" className="mb-3">
        <Form.Label>Distance</Form.Label>
        {distance()}
      </Form.Group>

      <Row>
        <Col>{datePick()}</Col>
        <Col>
          <Form.Group controlId="time" className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Time" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}
