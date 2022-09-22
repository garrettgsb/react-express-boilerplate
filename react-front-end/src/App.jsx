/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import "./index.css";
import Profile from "./components/Profile.js";
import FindRun from "./components/FindRun";
import useAppData from "./hooks/useAppData";
import Navigation from "./components/Navigation.js";
import RegisterUser from "./components/RegisterUser";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage.jsx";
import Error from "./components/Error";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const { runs, runnerRuns, users, user } = useAppData();

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route index element={<Homepage />}></Route>
          <Route
            path="/profile"
            element={<Profile runs={runnerRuns} users={users} user={user} />}
          ></Route>
          <Route path="/runs" element={<FindRun runs={runs} />}></Route>
          <Route path="/register" element={<RegisterUser />}></Route>
          {/* catch error urls */}
          {/* <Route path="*" element={<Error />}></Route> */}
        </Routes>
      </Router>

      {/* <Profile runs={runnerRuns} users={users} user={user} /> */}
      {/* <FindRun runs={runs} /> */}
      {/* <RegisterUser /> */}
    </div>
  );
}
