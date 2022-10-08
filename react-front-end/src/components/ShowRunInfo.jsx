import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RouteMap from "./RouteMap";
import "./ShowRunInfo.css";

export default function ShowRunInfo({ run, show, handleClose }) {
  const zoom = 10;
  const from = { lat: 43.4952921, lng: -79.9715306 };
  const to = { lat: 43.5058059, lng: -79.964735 };

  return (
    <>
      <Modal
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
        <Modal.Body>
          <p className="route-modal-message">
            {run.description}
          </p>
          <RouteMap zoom={zoom} from={from} to={to} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
