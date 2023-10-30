import "../style/App.css";
import React from "react";
import Quiz from "../asset/THELOGO.png";
import { useNavigate } from "react-router-dom";
import HighScores from "./HighScores";
import { useState, useEffect } from "react";
import Brandon from "../asset/brandon.png";

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
  }
  function handleInstructionsClick() {
    navigate("instructions")
   }

   return (
    
    <div className="div-style">
    
       
      <div className="home">
      <div className="logo-container">
        <img src={Quiz} alt="quizjs" />
      </div>
      <div className="dude-container">
      <button className="rectangle-button" onClick={handleStartClick}>
        START
      </button>
      <button className="rectangle-button" onClick={handleInstructionsClick}>
        INSTRUCTIONS
      </button>
     
        <img className="dude" src={Brandon} alt="brandon" />
      </div>
      <HighScores highScores={highScores} />
    </div>
    </div>
  );
}
export default Home;