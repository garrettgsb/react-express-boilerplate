/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import "./index.css";
import Profile from "./components/Profile.js";
import FindRun from "./components/FindRun";
import useAppData from "./hooks/useAppData";

import Navigation from './components/Navigation.js';
import RegisterUser from './components/RegisterUser'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const { runs, runnerRuns, users, user } = useAppData();
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

      <Profile runs={runnerRuns} users={users} user={user}/>
      <FindRun runs={runs}/>
      <RegisterUser/>



    </div>
  );
}
