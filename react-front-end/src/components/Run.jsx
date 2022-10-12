import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Run.css";
import JoinButton from "./JoinButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ShowRunInfo from "./ShowRunInfo";

export default function Run(props) {
  const { run, type, canJoinRun, join } = props;
  const [joinStatus, setJoinStatus] = useState(canJoinRun(run.id) || false);
  const [time, setTime] = useState("");
  const [eventTime, setEventTime] = useState("");

  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleCloseInfoModal = () => {
    setShowInfoModal(false);
  };
  const handleShowInfoModal = () => {
    setShowInfoModal(true);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p>Event on: {run.date}</p>
      <p>Click for more</p>
    </Tooltip>
  );

  useEffect(() => {
    if (run.time !== 0 && type === "attended") {
      setTime(`${run.time} min`);
    }
    if (run.future_run) {
      setEventTime(`${run.date} at ${run.event_time}`);
    }
    if (!run.future_run) {
      setEventTime(`Was on ${run.date} at ${run.event_time}`);
    }
  }, []);

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
            {type === "available" && (
              <span id={`run-${run.id}`} className="run-id">
                {run.id}
              </span>
            )}
            <h3>{run.name}</h3>

            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 50 }}
              overlay={renderTooltip}
            >
              {/* <span
                className="material-symbols-rounded"
                onClick={handleShowInfoModal}
              >
               
                info
              </span> */}
              <button
                type="button"
                className="detail-button"
                onClick={handleShowInfoModal}
              >
                Details
              </button>
            </OverlayTrigger>
          </div>
          <p>{run.description}</p>
          <div className="run-desc">
            <ListGroup variant="flush">
              <ListGroup.Item><strong>When:</strong> {eventTime}</ListGroup.Item>
              <ListGroup.Item><strong>Distance:</strong> {run.distance} km</ListGroup.Item>
              {time && <ListGroup.Item><strong>Recorded Time:</strong> {time}</ListGroup.Item>}
            </ListGroup>
            <JoinButton runType={type} joinStatus={joinStatus} join={join} />
          </div>
        </div>
      </section>
      <ShowRunInfo
        run={run}
        show={showInfoModal}
        handleClose={handleCloseInfoModal}
      />
    </>
  );
}
