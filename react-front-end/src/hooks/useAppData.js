/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { atom, useSetRecoilState, useRecoilValue } from "recoil";
//hook for getting runs
//hook for logged in user
//hook for runner only runs
//hook for planner runs
//axios route change based on user id

export const userState = atom({
  key: "userState",
  default: null,
});

export function getRuns() {
  return Promise.all([axios.get("/api/runs")])
    .then((response) => {
      const { runs } = response[0].data;
      return { runs };
    })
    .catch((error) => {
      console.log(error.response.status);
    });
}
export function getUsersRuns(id) {
  return Promise.all([
    axios.get(`/api/runs/runner/${id}`),
    axios.get(`/api/runs/planner/${id}`),
  ])
    .then((response) => {
      const { runnerRuns } = response[0].data;
      const { plannerRuns } = response[1].data;
      return { runnerRuns, plannerRuns };
    })
    .catch((error) => {
      console.log(error.response.status);
    });
}

export function login(email, password) {
  return axios
    .post("/api/login", { email, password })
    .then((response) => {
      const { user } = response.data;
      return { user };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function logout() {
  return axios
    .post("/api/logout")
    .then(() => {
      return null;
    })
    .catch((error) => {
      console.log(error);
    });
}
