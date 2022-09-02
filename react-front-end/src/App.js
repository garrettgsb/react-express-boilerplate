// import axios from 'axios';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Courses from './Components/Courses';
import CourseDetails from './Components/CourseDetails';
import data from './data';


export default function App() {
  return (
    <div className="App">
      <h1>Nav bar</h1>
      <Routes>
        <Route path="/" element={<Courses data={data} />} />
        <Route path="/course/:name" element={<CourseDetails />} />
      </Routes>
    </div>
  )
};