import "../style/App.css";
import "../style/home.css";
import React from "react";
import Quiz from "../asset/THELOGO.png";
import { useNavigate } from "react-router-dom";
import HighScores from "./HighScores";
import { useState, useEffect } from "react";
import Brandon from "../asset/brandon.png";
import { handleAudio, sounds } from "./SoundHelper";
import 'animate.css';

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
      <div className="home">
        <div className="logo-container">

        </div>
        <div className="content-container">
          <div className="top-page">
          <img className="animate__animated animate__backInDown" src={Quiz} alt="quizjs" />
          <div className="des">
          <h1>QuizJS is a series of questions that defy conventional thinking and logic.</h1>
          <h1>Test your wit against a series of fun, unexpected, and absurd questions!</h1>
          </div>
          </div>
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