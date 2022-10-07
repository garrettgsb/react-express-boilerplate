import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RouteMap from "./RouteMap";
import "./ShowRunInfo.css";

export default function ShowRunInfo({ runName = "Gargoyle Park" }) {
  const zoom = 10;
  const [pageRefresh, setPageRefresh] = useState(false);
  const from = { lat: 43.4952921, lng: -79.9715306 };
  const to = { lat: 43.5058059, lng: -79.964735 };

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    if (!pageRefresh) {
      // window.location.reload(true);
      setPageRefresh(true);
    }
  }, []);

  return (
    <>
      <RouteMap zoom={zoom} from={from} to={to} />

      {/* <Button variant="primary" onClick={handleShow}>
        Show route
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton className="route-modal-header">
          <Modal.Title className="modal-title">{runName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="route-modal-message">
          <p>Here is your running route</p>
          <RouteMap zoom={zoom} from={from} to={to} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
