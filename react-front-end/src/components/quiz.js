import React, { useState } from 'react';

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const questions = [
    'What is the capital of France?',
    'Who wrote "Romeo and Juliet"?',
    'What is the largest planet in our solar system?',
  ];

  const answers = [
    ['Berlin', 'Paris', 'Madrid', 'London'],
    ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    ['Mars', 'Jupiter', 'Saturn', 'Earth'],
  ];

  const hints = [
    "Think about the Eiffel Tower.",
    "The author's initials are W.S.",
    "It has a Great Red Spot.",
  ];

  const handleAnswerClick = (selectedAnswer) => {
    // Handle the selected answer (you can add your logic here)
    console.log(`Selected answer: ${selectedAnswer}`);
  };

  const handleHintClick = () => {
    // Show the hint
    setShowHint(true);
  };

  const handleNextClick = () => {
    // Move to the next question and hide the hint
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowHint(false);
  };

  return (
    <div>
      <h1>Quiz Time!</h1>
      <p>{questions[currentQuestionIndex]}</p>
      <ul>
        {answers[currentQuestionIndex].map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
      {showHint && <p>Hint: {hints[currentQuestionIndex]}</p>}
      <button onClick={handleHintClick}>Hint</button>
      <button onClick={handleNextClick}>Next Question</button>
    </div>
  );
};

export default QuizComponent;

