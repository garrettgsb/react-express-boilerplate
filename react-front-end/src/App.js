/* eslint-disable no-unused-vars */

import axios from "axios";
import "./index.css";
import Profile from "./components/Profile.js";
import FindRun from "./components/FindRun";
import useAppData from "./hooks/useAppData";
import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const { runs, runnerRuns } = useAppData();
  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };


  return (
    <div>
      <Navigation />
      <Profile runs={runnerRuns}/>
      <FindRun runs={runs}/>
    </div>
  );
}
