import React, { Component } from 'react';
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
  
  
  
  return (

    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}
