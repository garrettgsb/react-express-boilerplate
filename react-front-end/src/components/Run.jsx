import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Run.css";
import JoinButton from "./JoinButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Run(props) {
  const { run, type, canJoinRun, join } = props;
  const [joinStatus, setJoinStatus] = useState(canJoinRun(run.id) || false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Scheduled on {run.date}!
    </Tooltip>
  );

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
            {type !== "attended" && (
              <span id={`run-${run.id}`} className="run-id">
                {run.id}
              </span>
            )}
            <h3>{run.name}</h3>
            {run.future_run && (
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 50 }}
                overlay={renderTooltip}
              >
                <span className="material-symbols-rounded">calendar_month</span>
              </OverlayTrigger>
            )}
          </div>
          <p>{run.description}</p>
          <div className="run-desc">
            <ListGroup variant="flush">
              <ListGroup.Item>Distance: {run.distance} km</ListGroup.Item>
              {type !== "attended" && (
                <ListGroup.Item>Where: {run.location}</ListGroup.Item>
              )}
              <ListGroup.Item>
                Time: {type === "attended" ? `${run.time} min` : `${run.time}`}
              </ListGroup.Item>
              <ListGroup.Item>When: {run.date}</ListGroup.Item>
            </ListGroup>
            <JoinButton runType={type} joinStatus={joinStatus} join={join} />
          </div>
        </div>
      </section>
    </>
  );
}
