/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "./components/Profile.js";
import FindRun from "./components/FindRun";
import RegisterUser from "./components/RegisterUser";
import Homepage from "./components/Homepage.jsx";
import SignIn from "./components/SignIn";
import RegisterRun from "./components/RegisterRun";
import Map from "./components/Map";
import App from "./App";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/runs" element={<FindRun />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/create" element={<RegisterRun />}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/map" element={<Map />}/>
    </Route>
  )
);
