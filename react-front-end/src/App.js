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
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    <div className="container-fluid">
      <div className='row' >
        <div className='row h-10 px-0'>
          <Nav />
        </div>
        <div className='row h-80'>
          <Routes>
            <Route path="/" element={<Courses data={data} />} />
            <Route path="/course/:name" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <div className='navbar fixed-bottom'>
          <div className='col'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
};