import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RouteMap from "./RouteMap";
import ListGroup from "react-bootstrap/ListGroup";
import "./ShowRunInfo.css";

export default function ShowRunInfo({ run, show, handleClose }) {
  const zoom = 10;
  const from = { lat: 43.4952921, lng: -79.9715306 };
  const to = { lat: 43.5058059, lng: -79.964735 };
 
  return (
    <>
      <Modal
        className="run-modal"
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="route-modal-header" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-title"
          >
            {run.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="route-modal-message">
          <p>{run.description}</p>
          <div className="run-info">
            <RouteMap zoom={zoom} from={from} to={to} />
            <ListGroup variant="flush">
              <ListGroup.Item>On DASH at DASH</ListGroup.Item>
              <ListGroup.Item>From: Location A</ListGroup.Item>
              <ListGroup.Item>To: Location A</ListGroup.Item>
              <ListGroup.Item>Distance: </ListGroup.Item>
            </ListGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
