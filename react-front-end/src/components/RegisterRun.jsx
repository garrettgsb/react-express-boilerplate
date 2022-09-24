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
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      
    );
  }


  return (
    <Form className="form-container">
      <div className="form-container-text">
        <Form.Text as="h3">Create a Run</Form.Text>
        <Form.Text as="p">
          Don't see a run event near you?  Just tell us where and when and the rest is on us.
        </Form.Text>
      </div>
      {/* <FloatingLabel controlId="floatingInput" label="Event Address" className="mb-3">
        <Form.Control type="text" placeholder="Location" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="" className="mb-3">
        <Form.Control type="Address" placeholder="123 Maple Street, ON" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label=""
        className="mb-3"
      >
        <Form.Control type="" placeholder="Password" />
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Phone" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
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
      </Form.Group> */}
      {datePick()}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
