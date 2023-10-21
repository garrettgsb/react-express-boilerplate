import "../style/App.css";
import React from "react";
import Quiz from "../asset/THELOGO.png";
import { useNavigate } from "react-router-dom";
import HighScores from "./HighScores";


function Home() {

  const navigate = useNavigate();
  function handleStartClick() { 
    navigate("/game");
  }
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