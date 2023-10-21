import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/quiz.css";
import Quiz from "../asset/THELOGO.png";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const QuizComponent = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [lives, setLives] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

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
    ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    ['Mars', 'Jupiter', 'Saturn', 'Earth'],
    ['2', 'Fish', '42', '√(-1)'],
    ['0', '1', '2', '3'],
    ['A door', 'Piano', 'Typewriter', 'keyboard'],
    ['Apple', 'Orange', 'Banana', 'Grape'],
    ['0', '1', '2', 'Infinite'],
    ['In the U.S.', 'Nowhere, survivors are alive', 'In Canada', 'In an international cemetery'],
    ['Sponge', 'Towel', 'Soap', 'Raincoat'],
    ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    ['The letter "E"', 'The letter "M"', 'The letter "O"', 'The letter "N"'],
    ['Left', 'It doesn\'t roll, roosters don\'t lay eggs', 'Right', 'Down'],
    ['He sleeps at night', 'He only sleeps at night', 'He sleeps during the day', 'He takes power naps'],
    ['Mailbox', 'Mailman', 'Post Office', 'Alphabet'],
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

  // Shuffle the answers for each question
  const shuffledAnswers = answers.map((answerSet) => shuffleArray(answerSet));

  const correct = answers[currentQuestionIndex][1];
  const [hintUsed, setHintUsed] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correct) {
      console.log('Correct answer!');
      setScore((prevScore) => prevScore + 20);
    } else {
      console.log('Wrong answer!');
      setLives((prevLives) => prevLives - 1);
      setScore((prevScore) => prevScore);
    }
    handleNextClick();
  };
  const handleHintClick = () => {

    setHintUsed(true); // Set hintUsed to true when the hint is clicked
    setShowHint(true); // Show the hint

  };

  const handleNextClick = () => {
    if (currentQuestionIndex === 14) {
      // Quiz completed
      console.log('Quiz completed!');
      navigate('/congrads');
    } else {
      if (hintUsed && correct) {
        // Award points only if the hint was used and the answer is correct
        setScore((prevScore) => prevScore - 10);
      }
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowHint(false); // Reset the hint display when moving to the next question
      setHintUsed(false); 

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
    <div className='container'>
        <img className='logo' src={Quiz} alt="quizjs" />
        <div className='game'>
      <p className='round'>Round {currentRound}</p>
      <p className='questions'>{questions[currentQuestionIndex]}</p>
      <ul className='answers'>
        {shuffledAnswers[currentQuestionIndex].map((answer, index) => (
          <li key={index}>
            <button className='buttons' onClick={() => handleAnswerClick(answer)}>
              {getAnswerLabel(index)}. {answer}
            </button>
          </li>
        ))}
      </ul>
      <p className='lives'>Lives: {Array.from({ length: lives }, (_, index) => '❤️').join(' ')}</p>
      <p className='score'>Score: {score}</p>
      {showHint && <p className='hint'>Hint: {hints[currentQuestionIndex]}</p>}
     <button className='h-button' onClick={handleHintClick}>🤨Hint</button>
      </div>
    </div>
  );
};

export default QuizComponent;



