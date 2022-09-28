import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Run.css";

export default function Run(props) {
  const { run, type, joinRun } = props;

  return (
    <>
      <Card style={{ width: "60rem" }} className="run">
        <Card.Img className="run-image" src={`/api/runs/image/${run.id}`} />
        <Card.Body>
          <div className="run-heading">
            <Card.Title>{run.name}</Card.Title>
            {run.future_run && (
              <span className="material-symbols-rounded">schedule</span>
            )}
          </div>
          <Card.Text>{run.description}</Card.Text>
          <div className="run-desc">
            <ListGroup variant="flush">
              <ListGroup.Item>Distance: {run.distance} km</ListGroup.Item>
              {type !== "attended" && (
                <ListGroup.Item>Address: {run.location}</ListGroup.Item>
              )}
              <ListGroup.Item>Time: {run.time}</ListGroup.Item>
              <ListGroup.Item>Date: {run.date}</ListGroup.Item>
            </ListGroup>
            {type === "available" && <Button variant="primary" onClick={joinRun}>Join</Button>}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
