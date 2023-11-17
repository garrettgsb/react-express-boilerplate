// import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Landing from './routes/LandingRoute';
import { AuthProvider } from "./hooks/AuthContext";

function App() {

  return (
    <AuthProvider>
      <NavBar />
      <Landing />
      <Footer />
    </AuthProvider>
  );
}

export default App
