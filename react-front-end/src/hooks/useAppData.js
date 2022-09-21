/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";

//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id

export default function useAppData() {
  const [runs, setRuns] = useState({});
  const [runnerRuns, setRunnerRuns] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    Promise.all([axios.get("/api/runs"), axios.get("/api/runs/runner/1")])
      .then((response) => {
        //console.log(response);
        const { runs } = response[0].data;
        const { runnerRuns } = response[1].data;
        console.log(runs);
        setRuns(runs);
        setRunnerRuns(runnerRuns);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  return {
    runs,
    runnerRuns,
  };
}
