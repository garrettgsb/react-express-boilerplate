import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './pages/components/Header';
import Navbar from './pages/components/Navbar';
import Workout from './pages/Workout';

const exercises = [{
  name: "Bench press",
  type: "Strength",
  muscle: "Chest",
  equipment: "Barbell",
  difficulty: "Beginner",
  instruction: "Lay down on the bench and grab the bar and pushhhhh"
},
{
  name: "Shoulder press",
  type: "Strength",
  muscle: "Shoulder",
  equipment: "Dumbbell",
  difficulty: "Beginner",
  instruction: "Sit on the bench and grab the weights and push up"
}]

export default function App() {
  
  
  
  return (

    <div>
      <Navbar />
      <Outlet />
      {/* <Workout exercises= {exercises} /> */}
    </div>
  )
}
