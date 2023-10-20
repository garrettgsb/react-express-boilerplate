import "../style/App.css";
import React, { useState, useEffect } from 'react';
import data from "../data.json";
import HighScores from './HighScores';
import Quiz from "../asset/THELOGO.png";
import { useNavigate } from "react-router-dom";



function Home() {

  const navigate = useNavigate();
  function handleStartClick() { }
  function handleInstructionsClick() {
    navigate("instructions")
   }

   return (
    <div className="div-style">
      <img src={Quiz} alt="quizjs" />
      <button className="rectangle-button" onClick={handleStartClick}>
        START
      </button>
      <button className="rectangle-button" onClick={handleInstructionsClick}>
        INSTRUCTIONS
      </button>
      <HighScores />
    </div>
  );
}
export default Home;