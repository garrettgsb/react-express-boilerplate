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
        <p>instructions Go Here.</p>
      </div>
      <div class="button-container">
        <button className="rectangle-button" id="start-button" onClick={handleBackClick}>Go Back</button>
        <button className="rectangle-button" id="menu-button">Play</button>
      </div>
    </div>
  );
}

export default Instruction;