import "./style/App.css";
import React from 'react';
import { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Instruction from './components/instruction';
import QuizComponent from './components/quiz';
import Congrads from "./components/congrads";

function App() {
  const [leaderboardUpdated, setLeaderboardUpdated] = useState(false);

  const handleLeaderboardUpdate = () => {
    setLeaderboardUpdated(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route
          path="/congrads"
          element={<Congrads onLeaderboardUpdate={handleLeaderboardUpdate} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

