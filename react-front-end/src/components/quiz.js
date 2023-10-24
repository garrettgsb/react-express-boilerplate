import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/quiz.css";
import Quiz from "../asset/THELOGO.png";
import Dude from "../asset/dude.png";

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
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [lives, setLives] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [showDudeImage, setShowDudeImage] = useState(false);

  useEffect(() => {
    // Fetch questions from the API
    fetch('http://localhost:8080/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data.questions))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    const correctOption = questions[currentQuestionIndex].correct_option;

    if (selectedAnswer === correctOption) {
      console.log('Correct answer!');
      setScore((prevScore) => prevScore + 20);
      setShowDudeImage(true);

      // Set a timeout to hide the dude image and move to the next question
      setTimeout(() => {
        setShowDudeImage(false);
        handleNextClick();
      }, 1500);
    } else {
      console.log('Wrong answer!');
      setLives((prevLives) => prevLives - 1);
      setScore((prevScore) => prevScore);
      setShowDudeImage(false);
      handleNextClick();
    }
  };

  const handleHintClick = () => {
    setHintUsed(true); // Set hintUsed to true when the hint is clicked
    setShowHint(true); // Show the hint
  };

  const handleNextClick = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // Quiz completed
      console.log('Quiz completed!');
      navigate('/congrads');
    } else {
      if (hintUsed && questions[currentQuestionIndex].correct_option) {
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

  if (questions.length === 0) {
    return <p>Loading...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const shuffledAnswers = shuffleArray([
    currentQuestion.optiona,
    currentQuestion.optionb,
    currentQuestion.optionc,
    currentQuestion.optiond,
  ]);

  return (
    <div className='container'>
      <img className='logo' src={Quiz} alt="quizjs" />

      <div className='game'>
        <p className='round'>Round {currentRound}</p>
        <p className='questions'>{currentQuestion.question}</p>
        <ul className='answers'>
          {shuffledAnswers.map((answer, index) => (
            <li key={index}>
              <button className='buttons' onClick={() => handleAnswerClick(getAnswerLabel(index))}>
                {getAnswerLabel(index)}. {answer}
              </button>
            </li>
          ))}
        </ul>
        {showDudeImage && <img className='dude' src={Dude} alt='Dude' />}
        <p className='lives'>Lives: {Array.from({ length: lives }, (_, index) => '❤️').join(' ')}</p>
        <p className='score'>Score: {score}</p>
        {showHint && <p className='hint'>Hint: {currentQuestion.hint}</p>}
        <button className='h-button' onClick={handleHintClick}>🤨Hint</button>
      </div>
    </div>
  );
};

export default QuizComponent;




