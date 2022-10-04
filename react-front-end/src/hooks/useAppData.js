/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  atom,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
} from "recoil";
import { recoilPersist } from "recoil-persist";

//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id

// Used to persist global app state after manual refreshes.
// See key in local storage for browser
const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const runsState = atom({
  key: "runsState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const runnerRunsState = atom({
  key: "runnerRunsState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const plannerRunsState = atom({
  key: "plannerRunsState",
  default: null,
  effects_UNSTABLE: [persistAtom],
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

  function canJoinRun(run_id) {
    if (!runnerRuns) return true;
    const runExists = runnerRuns[run_id];
    if (runExists) return false;
    return true;
  }

  function joinRun(runner_id, run_id) {
    return axios
      .post("/api/register", { runner_id, run_id })
      .then((response) => {
        const { user_run } = response.data;

        if (user_run) return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function createRun(
    planner_id,
    name,
    description,
    address,
    distance,
    time,
    date,
    lat,
    lng,
    file
  ) {
    try {
      const createRunResponse = await axios({
        method: "post",
        url: "/api/runs",
        data: { planner_id, name, description, location: address, distance, time, date, lat, lng },
      });
      const { run } = createRunResponse.data;
      const addImageResponse = await axios({
        method: "post",
        url: `/api/image/${run.id}`,
        data: file,
        headers: {
          "Content-Type": "image/jpeg",
        },
      });
      if (addImageResponse.status !== 200) return false;
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async function registerUser(
    name,
    email,
    password,
    phone,
    age,
    gender,
    runner,
    planner
  ) {
    try {
      const registerUserResponse = await axios({
        method: "post",
        url: "/api/users",
        data: { name, email, password, phone, age, gender, runner, planner },
      });
      const { user } = registerUserResponse.data;
      if (registerUserResponse.status !== 200) return false;

      setUser(user);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    login,
    logout,
    joinRun,
    canJoinRun,
    createRun,
    registerUser
  };
}
