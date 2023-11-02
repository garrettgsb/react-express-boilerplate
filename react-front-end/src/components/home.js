import "../style/App.css";
import "../style/home.css";
import React from "react";

import { useNavigate } from "react-router-dom";
import HighScores from "./HighScores";
import { useState, useEffect } from "react";
import Brandon from "../asset/brandon.png";
import { handleAudio, sounds } from "./SoundHelper";
import 'animate.css';
import Header from "./header";
function Home() {
  const [highScores, setHighScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch high scores from the server
    fetch('/api/high-scores')
      .then(response => response.json())
      .then(data => {
        // Sort the high scores in descending order based on the 'score' property
        const sortedHighScores = data.games.sort((a, b) => b.score - a.score);
        setHighScores(sortedHighScores);
      })
      .catch(error => console.error('Error fetching high scores:', error));
  }, []);

  function handleStartClick() { 
    navigate("/quiz");
    handleAudio(sounds.click1)
  }
  function handleInstructionsClick() {
    navigate("instructions")
    handleAudio(sounds.click1)
  }


  return (
    <div className="div-style">
      <Header page="home"/>
      <div className="home">
        <div className="content-container">

          <div className="dude-container">
            <HighScores highScores={highScores} className="high-scores-container" />
            <img className="dude" src={Brandon} alt="brandon" />
          </div>
          <div className="start">
            <button
              className="rectangle-button"
              onClick={handleInstructionsClick}
              onMouseEnter={() => {
                handleAudio(sounds.hover1);
              }}
            >
              INSTRUCTIONS
            </button>
            <button
              className="rectangle-button"
              onClick={handleStartClick}
              onMouseEnter={() => {
                handleAudio(sounds.hover1);
              }}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
    
}
export default Home;