import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TopNavigationBar from './components/TopNavigationBar';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
import "./App.css";
import 'leaflet/dist/leaflet.css';
import Search from "./components/Search";
import WelcomePage from './components/WelcomePage';

function App() {

  return (
    <div className="App">
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} /> {/* Render WelcomePage for the root route */}
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LoginWithNavigate />} />        
        <Route path="/register" element={<Register />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}
// Helper component to pass the navigate function to Login
const LoginWithNavigate = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
}
export default App;

