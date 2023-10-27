import "../style/instruction.css";
import React from "react";
import InstructionImage from "../asset/instruction.png";
import { useNavigate } from "react-router-dom";



function Instruction() {

  const navigate = useNavigate();

  function handleBackClick() {
    navigate("/")
  }
  return (
    <div className="div-style">
      <div className="center-top">
        <img src={InstructionImage} alt="quizjs" className="instruction-image" />
      </div>
      <div className="instruction-container">
        <h1 className="welcome">Welcome to QuizJS</h1>
        <div className="how-to-play">
<p className="description">QuizJS is a series of questions that defy conventional thinking and logic. Test your wit against a series of fun, unexpected, and absurd questions!
</p>
<p className="bold">Starting Lives:</p>
<li>You begin the game with 5 lives</li>
<p className="bold">Answering Questions:</p>
<li>Each Question provides 4 choices</li>
<li>Correct Answer: +20 points</li>
<li>Correct Answer with Hint: +10 points</li>
<li>Incorrect Answer: Lose 1 life, 0 points</li>
<li>Skip the Question: 0 points, no lives lost</li>
<li>50:50 eliminates 2 wrong answers: 10 points</li>
<li>Switch the Question</li>
<p className="bold">Scoring:</p>
<li>Accumulate points for each correct answer</li>
<li>Use hints strategically for bonus points</li>
<p className="bold">Lives:</p>
<li>Lose a life for each incorrect answer</li>
<li>Use hints strategically for bonus points</li>
<p className="after">After the Quiz enter in a nick name then hit back to home to see your highscore on the leaderboard.</p>


</div>
      </div>
      <div class="button-container">
        <button className="rectangle-button" id="start-button" onClick={handleBackClick}>Go Back</button>
        <button className="rectangle-button" id="menu-button">Play</button>
      </div>
    </div>
  );
}

export default Instruction;