/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";

//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id


export const userState = atom({
  key: "userState",
  default: {},
});


export default function useAppData() {
  const [runs, setRuns] = useState({});
  const [runnerRuns, setRunnerRuns] = useState({});
  const [plannerRuns, setPlannerRuns] = useState({});
  const [users, setUsers] = useState({});
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {

    Promise.all([
    axios.get("/api/runs"), 
    axios.get("/api/runs/runner/1"),
    axios.get("/api/users"),
    axios.get("/api/users/1"),
    axios.get("/api/runs/planner/1")])
      .then((response) => {

        const { runs } = response[0].data;
        const { runnerRuns } = response[1].data;
        const { plannerRuns } = response[4].data;
        console.log("All available runs", runs);
        console.log("User ID 1's runs that have participated in:", runnerRuns);
        setRuns(runs);
        setRunnerRuns(runnerRuns);
        setPlannerRuns(plannerRuns);

        const { users } = response[2].data;
        setUsers(users)

        // const { user } = response[3].data;
        console.log("single user:", user);
        // setUser(user)
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  return {
    runs,
    runnerRuns,
    users,
    user,
    setUser,
    plannerRuns
  };



}
