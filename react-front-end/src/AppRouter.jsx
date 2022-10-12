import React from "react";
import Profile from "./components/Profile";
import FindRun from "./components/FindRun";
import RegisterUser from "./components/RegisterUser";
import Homepage from "./components/Homepage.jsx";
import SignIn from "./components/SignIn";
import RegisterRun from "./components/RegisterRun";
import App from "./App";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import ShowRunInfo from "./components/ShowRunInfo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/runs" element={<FindRun />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/create" element={<RegisterRun />}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/run-info" element={<ShowRunInfo />} />
    </Route>
  )
);
