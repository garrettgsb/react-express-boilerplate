import "./style/App.css";
import React from "react";
import data from "./data.json";
import Quiz from "./asset/quizjs.png";


function App() {

  function handleStartClick() { }
  function handleInstructionsClick() { }
  return (
    <div className="div-style">
      <img src={Quiz} alt="quizjs"/> 
      <button className="rectangle-button" onClick={handleStartClick}>
        START
      </button>
      <button className="rectangle-button" onClick={handleInstructionsClick}>
        INSTRUCTIONS
      </button>
      <div className="score-box">
        <h2>High Score</h2>
        <div className="score-columns">
          {data.highScores.map((score, index) => (
            <div key={index} className="score-row">
              <span className="player-name">{score.name}</span>
              <span className="player-score">{score.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;
