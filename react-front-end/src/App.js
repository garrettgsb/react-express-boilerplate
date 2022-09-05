// import axios from 'axios';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Courses from './Components/Courses';
import CourseDetails from './Components/CourseDetails';
import About from './Components/About'
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import data from './data';
import Nav from './Components/Nav';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Courses data={data} />} />
        <Route path="/course/:name" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
};