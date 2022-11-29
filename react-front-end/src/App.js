import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

import "./App.css";
import Workout from "./pages/Workout";

import ResponsiveDrawer from "./pages/components/ResponsiveDrawer";

// // ISOLATED COMPONENT TESTING SECTION
// import from './pages/components/';

// export default function App() {
//   return (
//     // INSERT COMPONENT TO BE TESTED BELOW

//   )
// }



export default function App() {
  const [programs, setPrograms] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [exerciseSelections, setExerciseSelections] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/programs")
      .then((result) => {
        // console.log("result.data:", result.data);
        setPrograms(result.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("http://localhost:8080/api/workouts")
      .then((result) => {
        setWorkouts(result.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("http://localhost:8080/api/exerciseselections")
      .then((result) => {
        // console.log("result of exerciseselections:", result.data);
        setExerciseSelections(result.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("http://localhost:8080/api/exercises/1")
      .then((result) => {
        // console.log("result of setexercises:", result.data);
        setExercises(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [programs, workouts, exerciseSelections, exercises]);

  return (
    <>
      <ResponsiveDrawer programs={programs} setPrograms={setPrograms}>
        <Outlet />
      </ResponsiveDrawer>

    </>
  );
}
