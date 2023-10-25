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
        <p className="how-to-play">QuizJS is a series of questions that defy conventional thinking and logic. Test your wit against a series of fun, unexpected, and absurd questions that defy conventional thinking and logic! 
You start the game with 5 lives. Every question will give you 5 choices to pick from. You get a question wrong you lose one life and get 0 points. Everytime you get a question right you score 20 points. Get a question right with a hint you get 10 points. Lose all 5 lives you get send back to the home page.
After completing the quiz you enter in a username and you get added to the leaderboard on the home page. If you get the same score as someone else your place on the leaderboard is determined by how long it took you to finish the quiz. So if someone gets a perfect score but you got a perfect score in a faster time you will be higher on the leaderboard.
So what are you waiting for go and get that high score!!
</p>
      </div>
      <div class="button-container">
        <button className="rectangle-button" id="start-button" onClick={handleBackClick}>Go Back</button>
        <button className="rectangle-button" id="menu-button">Play</button>
      </div>
    </div>
  );
}

export default Instruction;