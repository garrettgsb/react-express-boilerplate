import React from "react";
import TopBar from "./components/TopBar";
import "./App.scss";
import Home from "./components/Home";
import HomesRent from "./components/HomesRent";
import Sell from "./components/Sell";
import HomesSale from "./components/HomesSale";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";

function App(props) {
  return (
    <div className="App">
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes_rent" element={<HomesRent />} />
        <Route path="/homes_sale" element={<HomesSale />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
