import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './pages/components/Header';
import Navbar from './pages/components/Navbar';

import Exercise from './pages/Exercise';

const exercise = {
  name: "Bench press",
  type: "Strength",
  muscle: "Chest",
  equipment: "Barbell",
  difficulty: "Beginner",
  instruction: "Lay down on the bench and grab the bar and pushhhhh"
}

export default function App() {
  const [programs, setPrograms] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [exerciseSelections, setExerciseSelections] = useState([])
  const [exercises, setExercises] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8080/program')
      .then((result) => {
        setPrograms(result.data);
      }),
    axios.get('http://localhost:8080/workout')
      .then((result) => {
        setWorkouts(result.data);
      }),
    axios.get('http://localhost:8080/program/exercise')
      .then((result) => {
        setExerciseSelections(result.data);
      }),
      axios.get('http://localhost:8080/program/exercise/:id')
      .then((result) => {
        setExercises(result.data);
      })
  }, []);
  
  
  return (

    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}
