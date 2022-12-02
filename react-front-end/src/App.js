import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

import "./App.css";

import ResponsiveDrawer from "./pages/components/ResponsiveDrawer";

// // ISOLATED COMPONENT TESTING SECTION
// import from './pages/components/';

// export default function App() {
//   return (
//     // INSERT COMPONENT TO BE TESTED BELOW

//   )
// }

import Workout from "./pages/Workout";

const exercises = [
  {
    name: "Bench press",
    type: "Strength",
    muscle: "Chest",
    equipment: "Barbell",
    difficulty: "Beginner",
    instruction: "Lay down on the bench and grab the bar and pushhhhh",
  },
  {
    name: "Shoulder press",
    type: "Strength",
    muscle: "Shoulder",
    equipment: "Dumbbell",
    difficulty: "Beginner",
    instruction: "Sit on the bench and grab the weights and push up",
  },
];

export default function App() {
  const [programs, setPrograms] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [exerciseSelections, setExerciseSelections] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [dashboards, setDashboards] = useState([]);
  const [cookies, setCookies] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/programs")
      .then((result) => {
        setPrograms(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get("http://localhost:8080/api/workouts")
      .then((result) => {
        setWorkouts(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get("http://localhost:8080/api/exerciseselections")
      .then((result) => {
        setExerciseSelections(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get("http://localhost:8080/api/dashboard")
      .then((result) => {
        setDashboards(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <ResponsiveDrawer>
        <Outlet />
      </ResponsiveDrawer>
      {/* <Workout exercises= {exercises} /> */}
    </>
  );
}
