import React, { Component } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import "./App.css";
import TopNavigationBar from './components/TopNavigationBar';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
import "./App.css";
import 'leaflet/dist/leaflet.css';
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LoginWithNavigate />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </div>
  );
}

// Helper component to pass the navigate function to Login
const LoginWithNavigate = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};

export default App;