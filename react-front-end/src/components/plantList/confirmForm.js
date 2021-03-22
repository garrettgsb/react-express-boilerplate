import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
// import styled from "styled-components";


const greenText = {
  color: "#265642"
};

export default function ConfirmForm(props) {
  const [nickname, setNickname] = useState("");

  const clearClose = () => {
    setNickname("");
    props.onHide();
  };

  const submitClose = () => {
    props.onConfirm(nickname);
    clearClose();
  };

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={greenText} >
          Yay for new plants! 🪴
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={greenText} >
          <h5>Congratulations on your new {props.name}!</h5>
          <p>Does your plant have a nickname? Add it below to identify your new plant in your garden, or leave it blank and we'll simply show to plant's common name.</p>
          <Form>
              <Form.Label>🪴 Plant Nickname (optional)</Form.Label>
              <Form.Control
                placeholder="Add a nickname for your new plant here..."
                value={nickname}
                onChange={(event) => {setNickname(event.target.value)}}
              />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={submitClose}>Add to Garden</Button>
          <Button variant="secondary" onClick={clearClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
  );
}