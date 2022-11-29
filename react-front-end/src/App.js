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


  // When App initially loads, fetch data and store in state
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
    axios.get("http://localhost:8080/api/program").then((result) => {
      setPrograms(result.data);
    });
    axios.get("http://localhost:8080/api/workout").then((result) => {
      setWorkouts(result.data);
    });
    axios.get("http://localhost:8080/api/program/exercise").then((result) => {
      setExerciseSelections(result.data);
    });
    axios
      .get("http://localhost:8080/api/program/exercise/:id")
      .then((result) => {
        // console.log("result of setexercises:", result.data);
        setExercises(result.data);
      })
  }, []);
  
  
  return (
    <>
      <ResponsiveDrawer programs={programs} setPrograms={setPrograms}>
        <Outlet />
      </ResponsiveDrawer>

    </>
  )
}
