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
import Homepage from "./components/Homepage";
import Error from "./components/Error";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";

export default function App() {
  const { runs, runnerRuns, users, user, setUser } = useAppData();
  
  return (
    <div>
      <Router>
        <Navigation user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route index element={<Homepage />}></Route>
          <Route
            path="/profile"
            element={<Profile runs={runnerRuns} user={user} />}
          ></Route>
          <Route path="/runs" element={<FindRun runs={runs} />}></Route>
          <Route path="/register" element={<RegisterUser />}></Route>
          <Route path="/signin" element={<SignIn setUser={setUser}/>}></Route>
          {/* catch error urls */}
          {/* <Route path="*" element={<Error />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}
