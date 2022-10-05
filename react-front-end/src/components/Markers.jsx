import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Marker.css";

const Markers = ({ id, $hover, description, distance, date }) => {
  const handleClick = () => {
    console.log(`You clicked on ${description}`);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p>
        {description}
        {distance && ` (${distance})`}
      </p>
      <p>{date && `Date: ${date.slice(0, 10)}`}</p>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 100, hide: 100 }}
      overlay={renderTooltip}
    >
      <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
        <span className="circleText" title={description}>
          {id}
        </span>
      </div>
    </OverlayTrigger>
  );
};

export default Markers;
