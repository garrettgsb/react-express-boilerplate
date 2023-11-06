import "../style/App.css";
import "../style/home.css";
import React from "react";

import { useNavigate } from "react-router-dom";
import HighScores from "./HighScores";
import { useState, useEffect, useContext } from "react";
import Brandon from "../asset/brandon.png";
import { handleAudio, sounds } from "./SoundHelper";
import { AppContext } from "./AppContext";
import 'animate.css';
import Header from "./header";
function Home() {
  const [highScores, setHighScores] = useState([]);
  const navigate = useNavigate();
  const { state } = useContext(AppContext)

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
    handleAudio(state.isMute, sounds.click)
  }
  function handleInstructionsClick() {
    console.log(state.isMute)
    navigate("instructions");
    handleAudio(state.isMute, sounds.click)
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
              className="start-button"
              onClick={handleInstructionsClick}
              onMouseEnter={() => {handleAudio(state.isMute, sounds.hover)}}
            >
              INSTRUCTIONS
            </button>
            <button
              className="info-button"
              onClick={handleStartClick}
              onMouseEnter={() => {handleAudio(state.isMute, sounds.hover)}}
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