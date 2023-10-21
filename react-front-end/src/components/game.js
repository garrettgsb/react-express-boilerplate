import "../style/game.css";
import React, { useState } from "react";
// import data from "../data.json";
import Quiz from "../asset/THELOGO.png";
import { useNavigate } from "react-router-dom";
import mockData from "../mockData.json";



function Game() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < mockData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(0);
      setShowResult(false);
    } else {
      
    }
  };


  return (
    <div className="quiz-container">
      <img src={Quiz} alt="quizjs" />
      <div className="question">
        <p>{mockData.questions[currentQuestion].question}</p>
      </div>
      <div className="answer-choices">
        {mockData.questions[currentQuestion].choices.map((choice, index) => (
          <div
            key={index}
            className={`choice ${selectedAnswer === index ? "selected" : ""}`}
            onClick={() => handleAnswerSelect(index)}
          >
            {choice}
          </div>
        ))}
      </div>
      {showResult && (
        <div className={`result ${selectedAnswer === mockData.questions[currentQuestion].correctAnswer ? "correct" : "wrong"}`}>
          {selectedAnswer === mockData.questions[currentQuestion].correctAnswer ? "Correct!" : "Wrong!"}
        </div>
      )}
      <button className="submit-button" onClick={checkAnswer}>
        Submit
      </button>
      <button className="next-button" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Game;
