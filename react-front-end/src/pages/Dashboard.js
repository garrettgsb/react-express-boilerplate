import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Calendar } from "./components/Dashboard/Calendar";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState([]);
  const navigate = useNavigate();
 
  

  useEffect(() => {
    Axios.get("http://localhost:8080/api/dashboard")
      .then((result) => {
        setDashboard(result.data);
        if (Cookies.get("Jason") === undefined) {
          return navigate("/login");
        } 
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, []);

    const reachGoal = function() {
      if (dashboard.current_weight - dashboard.goal_weight === 0) {
        return "You reached your goal weight!!! congrats"
      } else {
        return `You are currently ${Math.abs(dashboard.current_weight - dashboard.goal_weight)} lbs away from your goal!`
      }
    }
  

    return (
      <>
        <h1>This is dashboard page</h1>
        <h3>Welcome back {dashboard.first_name}</h3>
        <div>Goal: {dashboard.goal}</div>
        <div>Current Weight: {dashboard.current_weight}</div>
        <div>Goal Weight: {dashboard.goal_weight}</div>
        <div>
         {reachGoal()}
        </div>
        <Calendar />
      </>
    );


  }
