import "@csstools/normalize.css"
import "./style/App.css";
import React from 'react';
import { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Instruction from './components/instruction';
import QuizComponent from './components/quiz';
import Congrads from "./components/congrads";


function App() {

  const [highScores, setHighScores] = useState([]);


  // Function to update high scores
  const updateHighScores = async () => {
    try {
      // Fetch high scores from the server or perform any other logic
      const response = await fetch('/api/high-scores');
      if (response.ok) {
        const data = await response.json();
        setHighScores(data.games);
      } else {
        console.error('Failed to fetch high scores');
      }
    } catch (error) {
      console.error('Error fetching high scores:', error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route
          path="/congrads"
          element={<Congrads onLeaderboardUpdate={updateHighScores} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

