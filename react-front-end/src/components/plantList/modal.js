import React from 'react'
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
// import styled from "styled-components";


const greenText = {
  color: "#265642"
};
const iconStyle = {
  color: "#3B715A"
}

export default function PlantModal(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={greenText} >
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={greenText} >
          <h5>{props.scientificName}</h5>
          <p>
            {props.description}
          </p>
        </Modal.Body>

        <Modal.Body className="show-grid">
          <Container style={greenText} >
            <Row>
              <Col xs={10} sm={6} md={4}>
                <i className="fas fa-leaf icon" style={iconStyle} /> {props.difficulty};
              </Col>
              <Col xs={10} sm={6} md={4}>
                <i className="fas fa-tint" style={iconStyle} /> every {props.waterDesc} days
              </Col>
              <Col xs={10} sm={6} md={4}>
                <i className="fas fa-sun" style={iconStyle} /> {props.sun} light
              </Col>
              <Col xs={10} sm={6} md={4}>
                <i className="fas fa-paw" style={iconStyle} /> {props.toxic ? "toxic" : "safe"}
              </Col>
              <Col xs={10} sm={6} md={4}>
                <i className="fas fa-thermometer-half" style={iconStyle} /> {props.temp}°C
              </Col>
              <Col xs={10} sm={6} md={4}>
                <i className="fas fa-seedling" style={iconStyle} /> {props.fertilizer.toLowerCase()}
              </Col>
            </Row>

          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
}