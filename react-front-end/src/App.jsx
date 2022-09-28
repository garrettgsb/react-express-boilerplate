/* eslint-disable no-unused-vars */
import React from "react";
// import { router } from "./AppRouter";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getRuns, getUsersRuns, login, logout } from "./hooks/useAppData";
import Navigation from "./components/Navigation.js";
import { Outlet } from "react-router-dom";
import { atom, useSetRecoilState, useRecoilValue } from "recoil";

export async function runsLoader() {
  const { runs } = await getRuns();
  return { runs };
}

export async function usersRunsLoader(id) {
  const { runnerRuns, plannerRuns } = await getUsersRuns(id);
  return { runnerRuns, plannerRuns };
}



export default function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
