import "../style/instruction.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header"
import { handleAudio, sounds } from "./SoundHelper";
import { AppContext } from "./AppContext";

function Instruction() {

  const navigate = useNavigate();
  const { state } = useContext(AppContext)

  function handleStartClick() { 
    navigate("/quiz");
    handleAudio(state.isMute, sounds.click)
  }

  function handleBackClick() {
    navigate("/")
    handleAudio(state.isMute, sounds.click)
  }

  function handleStartClick() { 
    navigate("/quiz");
    handleAudio(state.isMute, sounds.click)
  }

  return (
    <div className="div-style">
        <Header page="instructions"/>
          <div className="instruction-container">  
            <h1 className="welcome">Welcome to QuizJS</h1>
            <div className="how-to-play">
              <p className="bold">Starting Lives:</p>
              <ul>
                <li>You begin the game with 5 lives ❤️❤️❤️❤️❤️</li>
              </ul>
              <p className="bold">Answering Questions:</p>
              <ul>
                <li>Each Question provides 4 choices</li>
                <li>Correct Answer: +20 points</li>
                <li>Correct Answer with Hint: +10 points, Wrong Answer: -10 points</li>
                <li>Incorrect Answer: Lose 1 life, 0 points</li>
                <li>Skip the Question: 0 points, no lives lost</li>
                <li>50:50: eliminates 2 wrong answers, 10 points</li>
                <li>Swap: no lives lost or points just your Question get switched</li>
                <li>Time limit: you have a 5 minute time limit to complete all the questions</li>
              </ul>
              <p className="bold">Lives:</p>
              <ul>
                <li>Lose a life for each incorrect answer</li>
                <li>Use hints, skip, 50:50, and swap when stuck</li>
              </ul>
              <p className="after">After the Quiz enter in a nick name then hit back to home to see your highscore on the leaderboard.</p>
          </div>
      </div>
      <div className="button-container">
        <button className="rectangle-button" id="start-button"
          onClick={handleBackClick}
          onMouseEnter={() => {handleAudio(state.isMute, sounds.hover)}}
        >Go Back</button>
        <button className="rectangle-button" id="menu-button"
          onClick={handleStartClick}
          onMouseEnter={() => {handleAudio(state.isMute, sounds.hover)}}
        >Play</button>
      </div>
    </div>
  );
}

export default Instruction;