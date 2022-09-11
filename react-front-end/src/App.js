// import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
import AdminLogin from './Components/AdminLogin';
import CreateCourse from './Components/CreateCourse';
import EditResource from './Components/EditResource'

export default function App() {
  const [admin, setAdmin] = useState(false);
  const [resources, setResources] = useState([]);

  return (
    <div className="container-fluid">
      <div className='row' >
        <div className='row h-10 px-0 nav1'>
          <Nav />
        </div>
        <div className='row h-80'>
          <Routes>
            <Route path="/" element={<Courses data={data} />} />
            <Route path="/course/:name" element={<CourseDetails admin={admin} resources={resources} setResources={setResources}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn setAdmin={setAdmin} />} />
            <Route path="/sign-out" />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/edit-resource/:id" element={<EditResource setResources={setResources}  />} />
          </Routes>
        </div>
        <div className='row h-10 px-0 foot1'>
            <Footer />
        </div>
      </div>
    </div>
  )
};