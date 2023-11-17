// import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Landing from './routes/LandingRoute';

function App() {

  return (
    <>
      <NavBar />
      <Landing />
      <Footer />
    </>
  );
}

export default App
