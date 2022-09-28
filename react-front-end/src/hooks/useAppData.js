/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  atom,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
} from "recoil";
//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id

export const userState = atom({
  key: "userState",
  default: null,
});

export const runsState = atom({
  key: "runsState",
  default: null,
});

export const runnerRunsState = atom({
  key: "runnerRunsState",
  default: null,
});

export const plannerRunsState = atom({
  key: "plannerRunsState",
  default: null,
});

export default function useAppData() {
  const [runs, setRuns] = useRecoilState(runsState);
  const [runnerRuns, setRunnerRuns] = useRecoilState(runnerRunsState);
  const [plannerRuns, setPlannerRuns] = useRecoilState(plannerRunsState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    Promise.all([axios.get("/api/runs")])
      .then((response) => {
        const { runs } = response[0].data;
        setRuns(runs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      Promise.all([
        axios.get(`/api/runs/runner/${user.id}`),
        axios.get(`/api/runs/planner/${user.id}`),
      ])
        .then((response) => {
          const { runnerRuns } = response[0].data;
          const { plannerRuns } = response[1].data;
          setRunnerRuns(runnerRuns);
          setPlannerRuns(plannerRuns);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  function login(email, password) {
    return axios
      .post("/api/login", { email, password })
      .then((response) => {
        const { user } = response.data;
        setUser(user);
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    return axios
      .post("/api/logout")
      .then(() => {
        setUser(null);
        setRunnerRuns(null);
        setPlannerRuns(null);
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    login,
    logout,
  };
}
