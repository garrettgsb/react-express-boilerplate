import React from "react";

const Activity = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h6>{props.desc}</h6>
    </div>
  );
};

export default Activity;
