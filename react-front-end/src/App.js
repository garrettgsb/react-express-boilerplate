import React, { useState, useEffect } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

return (
    <div className="App">
      <TopBar isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes_rent" element={<HomesRent />} />
        <Route path="/homes_sale" element={<HomesSale />} />
        <Route path="/sell" element={<Sell />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={loginHandler} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/register"
          element={<RegistrationPage onLogin={loginHandler} />}
          isLoggedIn={isLoggedIn}
        />
      </Routes>
    </div>
  );
}

export default App;
