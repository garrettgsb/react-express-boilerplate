/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Run from "./Run";
import Map from "./Map";

export default function FindRun(props) {
  const { runs } = props;

  const showAvailableRuns = (runs) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => (
      <Run key={run.id} run={run} userFlag={false} />
    ));
  };

  return (
    <>
      <Map />
      <h1>All available runs you can join:</h1>
      {showAvailableRuns(runs)}
    </>
  );
}
