import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RouteMap from "./RouteMap";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles/ShowRunInfo.css";

export default function ShowRunInfo({ run, show, handleClose }) {
  const zoom = 10;
  const from = { lat: run.latitude, lng: run.longitude };
  const to = { lat: run.latitude_to, lng: run.longitude_to };

  return (
    <>
      <Modal
        className="run-modal"
        show={show}
        onHide={handleClose}
        size="xl"
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
              <ListGroup.Item as="h4">Details & Route</ListGroup.Item>
              <ListGroup.Item>
                On {run.date} at {run.event_time}
              </ListGroup.Item>
              <ListGroup.Item>Start: {run.location}</ListGroup.Item>
              <ListGroup.Item>Finish: {run.location_to}</ListGroup.Item>
              <ListGroup.Item>Distance: {run.distance}km</ListGroup.Item>
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
