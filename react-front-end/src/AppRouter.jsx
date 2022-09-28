/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "./components/Profile.js";
import FindRun from "./components/FindRun";
import RegisterUser from "./components/RegisterUser";
import Homepage from "./components/Homepage.jsx";
import SignIn from "./components/SignIn";
import App, { runsLoader, usersRunsLoader } from "./App";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route
        path="/profile/:id"
        element={<Profile />}
        loader={async ({ params }) => {
          const { id } = params;
          return usersRunsLoader(id);
        }}
      />
      <Route path="/runs" element={<FindRun />} loader={runsLoader} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/signin" element={<SignIn />} />
    </Route>
  )
);
