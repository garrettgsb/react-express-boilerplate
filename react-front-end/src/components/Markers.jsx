import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Marker.css";

const Markers = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See me!
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 100, hide: 50 }}
      overlay={renderTooltip}
    >
      <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
        <span className="circleText" title={tooltip}>
          {text}
        </span>
      </div>
    </OverlayTrigger>
  );
};

export default Markers;
