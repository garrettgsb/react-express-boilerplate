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
  const [showHint, setShowHint] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const totalLives = 5;
  const [remainingLives, setRemainingLives] = useState (totalLives)

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === mockData.questions[currentQuestion].correctAnswer) {
      if (showHint) {
        setScore(score + 10);
      } else {
        setScore(score + 20);
      }
    } else {
      if (remainingLives > 0) {
        setRemainingLives(remainingLives - 1);
      } else {
        navigate("/home");
      }
    }
    setShowResult(true);
  };

  const showQuestionHint = () => {
    setShowHint(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < mockData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(0);
      setShowHint(false);
      setShowResult(false);
    } else {
      if (remainingLives > 0) {
        setCurrentQuestion(0);
        setSelectedAnswer(0);
        setShowHint(false);
        setShowResult(false);
      } else {
        navigate("/leaderboard", { state: {score} });
      }
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
      <button className="hint-button" onClick={showQuestionHint}>
        Hint
      </button>
      {showHint && <div className="hint">{mockData.questions[currentQuestion].hint}</div>}
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
      <div className="lives">Lives: {remainingLives}</div>
    </div>
  );
}

export default Game;
