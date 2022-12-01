import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useOutletContext } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "./pages/components/ResponsiveDrawer";

export default function App() {
  const [programs, setPrograms] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const getAndSetPrograms = () => {
    console.log("getAndSetPrograms was called");
    axios
      .get("/api/programs")
      .then((result) => {
        console.log("programs:", result.data);
        setPrograms(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAndSetWorkouts = () => {
    axios
      .get("/api/workouts")
      .then((result) => {
        console.log("workouts:", result.data);
        setWorkouts(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const [exerciseSelections, setExerciseSelections] = useState([]);
  // const [exercises, setExercises] = useState([]);

  // When App initially loads, fetch data and store in state

  useEffect(() => {
    getAndSetPrograms();
    getAndSetWorkouts();
    // axios
    //   .get("http://localhost:8080/api/exerciseselections")
    //   .then((result) => {
    //     // console.log("result of exerciseselections:", result.data);
    //     setExerciseSelections(result.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    // axios
    //   .get("http://localhost:8080/api/program/exercise/:id")
    //   .then((result) => {
    //     // console.log("result of setexercises:", result.data);
    //     setExercises(result.data);
    //   });
  }, []);

  return (
    <>
      <ResponsiveDrawer programs={programs} setPrograms={setPrograms}>
        <Outlet
          context={{
            programs,
            setPrograms,
            getAndSetPrograms,
            getAndSetWorkouts,
          }}
        />
      </ResponsiveDrawer>
    </>
  );
}

export function usePrograms() {
  return useOutletContext();
}
