import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizComponent = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [lives, setLives] = useState(5);
  const [showHint, setShowHint] = useState(false);

  const questions = [
    'What is the capital of France?',
    'Who wrote "Romeo and Juliet"?',
    'What is the largest planet in our solar system?',
    'What is the square root of a fish?',
    'If you have 3 apples and you take away 2, how many apples do you have left?',
    'What has keys but can\'t open locks?',
    'Which is the odd one out?',
    'How many sides does a circle have?',
    'If a plane crashes on the border between the U.S. and Canada, where do you bury the survivors?',
    'What gets wetter as it dries?',
    'Which planet is known as the "Red Planet"?',
    'What comes once in a minute, twice in a moment, but never in a thousand years?',
    'If a rooster lays an egg on a triangular roof, which way does the egg roll?',
    'How can a man go eight days without sleep?',
    'What has an endless supply of letters but starts empty?',
  ];

  const answers = [
    ['Berlin', 'Paris', 'Madrid', 'London'],
    ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    ['Mars', 'Jupiter', 'Saturn', 'Earth'],
    ['2', 'Fish (Correct Answer)', '42', '√(-1)'],
    ['0', '1 (Correct Answer)', '2', '3'],
    ['A door', 'Keyboard', 'Typewriter', 'Piano (Correct Answer)'],
    ['Apple', 'Banana', 'Orange (Correct Answer)', 'Grape'],
    ['0', '1 (Correct Answer)', '2', 'Infinite'],
    ['In the U.S.', 'In Canada', 'Nowhere, survivors are alive (Correct Answer)', 'In an international cemetery'],
    ['Towel (Correct Answer)', 'Sponge', 'Soap', 'Raincoat'],
    ['Venus', 'Jupiter', 'Mars (Correct Answer)', 'Saturn'],
    ['The letter "M" (Correct Answer)', 'The letter "E"', 'The letter "O"', 'The letter "N"'],
    ['Left', 'Right', 'It doesn\'t roll, roosters don\'t lay eggs (Correct Answer)', 'Down'],
    ['He sleeps at night', 'He takes power naps', 'He sleeps during the day', 'He only sleeps at night (Correct Answer)'],
    ['Mailbox', 'Alphabet', 'Post Office', 'Mailman (Correct Answer)'],
  ];

  const hints = [
    "Think about the Eiffel Tower.",
    "The author's initials are W.S.",
    "It has a Great Red Spot.",
    "Fish come in many shapes and sizes, but they are known for something specific.",
    "This question plays with the concept of ownership.",
    "This item is often found in homes and offices.",
    "Consider the category or common characteristics of the items.",
    "Think geometrically, but don't focus on straight lines.",
    "This is a tricky question involving the geography of a crash.",
    "It's related to an everyday item and the action it performs.",
    "Look to the skies and identify the planet with a distinct color.",
    "This one is about time and a specific letter's occurrence.",
    "Focus on the unique situation described and its implications.",
    "It's not about sleeping patterns but a clever trick with days.",
    "It's not about paper or mail but a fundamental concept.",
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === answers[currentQuestionIndex][1]) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer!');
      setLives((prevLives) => prevLives - 1);
    }
    handleNextClick();
  };
  const handleHintClick = () => {
    setShowHint(true);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex === 14) {
      // Quiz completed
      console.log('Quiz completed!');
      navigate('/congrads');
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowHint(false); // Reset the hint display when moving to the next question

      if (currentQuestionIndex % 5 === 4) {
        // Move to the next round after every 5 questions
        setCurrentRound((prevRound) => prevRound + 1);
      }
      if (lives === 0) {
        // All lives are gone, navigate to the home page
        navigate('/');
      }
    }
  };

  const getAnswerLabel = (index) => {
    return String.fromCharCode(65 + index);
  };

  return (
    <div>
      <h1>Quiz Time!</h1>
      <p>Round {currentRound}</p>
      <p>{questions[currentQuestionIndex]}</p>
      <ul>
        {answers[currentQuestionIndex].map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(answer)}>
              {getAnswerLabel(index)}. {answer}
            </button>
          </li>
        ))}
      </ul>
      <p>Lives: {Array.from({ length: lives }, (_, index) => '❤️').join(' ')}</p>
      {showHint && <p>Hint: {hints[currentQuestionIndex]}</p>}
      <button onClick={handleHintClick}>Hint</button>
    </div>
  );
};

export default QuizComponent;



