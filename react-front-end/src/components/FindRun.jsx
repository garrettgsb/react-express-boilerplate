/* eslint-disable no-unused-vars */
import React from "react";
import Run from "./Run";
import Map from "./Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState, runsState } from "../hooks/useAppData";
import useAppData from "../hooks/useAppData";

export default function FindRun() {
  // const { runs } = useLoaderData();
  const runs = useRecoilValue(runsState);
  const user = useRecoilValue(userState);
  const { joinRun, canJoinRun } = useAppData();
  const navigate = useNavigate();

  const join = (user_id, run_id) =>{
    // Check if joining is possible
    if (!canJoinRun(run_id)) {
      console.log("You cannot join this run.");
      navigate("/");
      return;
    }
    // Join if possible
    joinRun(user_id, run_id)
    .then((response)=>{
      response && navigate("/profile");
    })
  }

  const showAvailableRuns = (runs, type) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => {
      return (
        <Run
          key={run.id}
          run={run}
          type={type}
          join={() => join(user.id, run.id)}
          canJoinRun={()=>canJoinRun(run.id)}
        />
      );
    });
  };

  return (
    <>
      <Map />
      <h1>All available runs you can join:</h1>
      {showAvailableRuns(runs, "available")}
    </>
  );
}
