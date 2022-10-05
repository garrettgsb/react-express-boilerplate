import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Run.css";
import JoinButton from "./JoinButton";

export default function Run(props) {
  const { run, type, canJoinRun, join } = props;
  const [joinStatus, setJoinStatus] = useState(canJoinRun(run.id) || false);

  return (
    <>
      <section className="run">

        <img
          alt="Shows running space"
          className="run-image"
          src={`/api/runs/image/${run.id}`}
        ></img>

        <div className="run-body">
          <div className="run-heading">
            {type !== "attended" && <span id={`run-${run.id}`} className="run-id">{run.id}</span>}
            <h3>{run.name}</h3>
            {run.future_run && (
              <span className="material-symbols-rounded">schedule</span>
            )}
          </div>
          <p>{run.description}</p>
          <div className="run-desc">
            <ListGroup variant="flush">
              <ListGroup.Item>Distance: {run.distance} km</ListGroup.Item>
              {type !== "attended" && (
                <ListGroup.Item>Address: {run.location}</ListGroup.Item>
              )}
              <ListGroup.Item>Time: {run.time}</ListGroup.Item>
              <ListGroup.Item>Date: {run.date.slice(0, 10)}</ListGroup.Item>
            </ListGroup>
            <JoinButton runType={type} joinStatus={joinStatus} join={join} />
          </div>
        </div>
      </section>
    </>
  );
}
