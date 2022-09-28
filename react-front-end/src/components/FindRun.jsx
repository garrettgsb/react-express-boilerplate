/* eslint-disable no-unused-vars */
import React from "react";
import Run from "./Run";
import Map from "./Map";
import { useLoaderData } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { runsState } from "../hooks/useAppData";

export default function FindRun() {
  // const { runs } = useLoaderData();
  const runs = useRecoilValue(runsState);

  const showAvailableRuns = (runs, type) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => <Run key={run.id} run={run} type={type} />);
  };

  return (
    <>
      <Map />
      <h1>All available runs you can join:</h1>
      {showAvailableRuns(runs, "available")}
    </>
  );
}
