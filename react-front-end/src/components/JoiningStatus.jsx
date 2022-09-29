import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

export default function JoiningStatus(props) {
  const { joinButtonPressed, setJoinButtonPressed } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (joinButtonPressed === true) {
      let timer = setTimeout(() => {
        setJoinButtonPressed(false);
        navigate("/profile");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [joinButtonPressed]);

  return (
    <>
      <Modal show={joinButtonPressed} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>THANK YOU FOR JOINING A RUN!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="status-spinner-size">
          <Spinner animation="border" />
        </Modal.Body>
      </Modal>
    </>
  );
}
