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

import RegisterRun from "./components/RegisterRun";

import Map from "./components/Map";



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignIn from "./components/SignIn";

require("dotenv").config();


export default function App() {
  const { runs, runnerRuns, users, user, setUser, plannerRuns } = useAppData();
  

  return (
    <div>
      <Router>
        <Navigation user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route index element={<Homepage />}></Route>
          <Route
            path="/profile"
            element={<Profile runnerRuns={runnerRuns} plannerRuns={plannerRuns} user={user} />}
          ></Route>
          <Route path="/runs" element={<FindRun runs={runs} />}></Route>
          <Route path="/register" element={<RegisterUser />}></Route>

          <Route path="/create" element={<RegisterRun />}></Route>

          <Route path="/signin" element={<SignIn setUser={setUser}/>}></Route>



          <Route path="/map" element={<Map />}></Route>

          {/* catch error urls */}
          {/* <Route path="*" element={<Error />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}
