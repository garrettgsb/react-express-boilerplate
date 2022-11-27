import React, { Component } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './pages/components/Header';
import Navbar from './pages/components/Navbar';
import ResponsiveDrawer from './pages/components/ResponsiveDrawer';
import Workout from './pages/Workout';

// // ISOLATED COMPONENT TESTING SECTION
// import from './pages/components/';

// export default function App() {
//   return (
//     // INSERT COMPONENT TO BE TESTED BELOW
 
//   )
// }


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
    <>
      {/* <Navbar />
      <Outlet /> */}
      <ResponsiveDrawer >
        <Outlet />
      </ResponsiveDrawer>
      {/* <Workout exercises= {exercises} /> */}
    </>
  )
}
