import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useOutletContext } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "./pages/components/ResponsiveDrawer";

export default function App() {
  const [programs, setPrograms] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const getAndSetPrograms = () => {
    axios
      .get("/api/programs")
      .then((result) => {
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
        setWorkouts(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  // When App initially loads, fetch data and store in state
  useEffect(() => {
    getAndSetPrograms();
    getAndSetWorkouts();

  }, []);

  return (
    <>
      <ResponsiveDrawer programs={programs} setPrograms={setPrograms}>
        <Outlet
          context={{
            programs,
            setPrograms,
            getAndSetPrograms,
            workouts,
            setWorkouts,
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
