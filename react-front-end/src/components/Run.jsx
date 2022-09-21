import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Run.css";

export default function Run() {
  const [run, setRun] = useState({
    id: 2,
    name: "Seaside Park",
    distance: "5",
    description: "Beautiful view of the sea.",
    location: "213, Seaside St., Seaside, BC, K8L 8Y5",
    time: "10:00:00",
    date: "2022-12-23T05:00:00.000Z",
    future_run: true
  });
  const [runImage, setRunImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/366/366998.png"
  );

  return (
    <>
      <Card style={{ width: "60rem" }} className="run">
        <Card.Img className="run-image" src={runImage} />
        <Card.Body>
          <div className="run-heading">
            <Card.Title>{run.name}</Card.Title>
            {run.future_run && <span class="material-symbols-rounded">schedule</span>}
          </div>
          <Card.Text>{run.description}</Card.Text>
          <ListGroup>
            <ListGroup.Item>Distance: {run.distance} km</ListGroup.Item>
            <ListGroup.Item>Address: {run.location}</ListGroup.Item>
            <ListGroup.Item>Time: {run.time}</ListGroup.Item>
            <ListGroup.Item>Date: {run.date}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
