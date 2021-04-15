import React from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  return (
    <h1>
      Time
    </h1>
  );
}

export default Clock;
