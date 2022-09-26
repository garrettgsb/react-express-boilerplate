import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactAgent() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>Contact Agent</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">agent name</Card.Subtitle>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" id="name" name="name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" id="phone" name="phone" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" id="email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" id="message" name="message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Contact Agent
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
