// quiz.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/quiz.css";
import Quiz from "../asset/THELOGO.png";
import Dude from "../asset/dude.png";

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
  const [options, setOptions] = useState([]);
  const [fiftyOptions, setFiftyOptions] = useState([]);
  const [clickFifty, setClickFifty] = useState(false);

  const optionLabel = {
    0: "A",
    1: "B",
    2: "C",
    3: "D"
  }

  useEffect(() => {
    // Fetch questions
    fetch('http://localhost:8080/api/questions')
      .then(response => response.json())
      .then(data => {
        console.log(data.questions)
        setOptions([data.questions[currentQuestionIndex].optiona, data.questions[currentQuestionIndex].optionb, data.questions[currentQuestionIndex].optionc, data.questions[currentQuestionIndex].optiond])
        setQuestions(data.questions);
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setOptions([questions[currentQuestionIndex].optiona, questions[currentQuestionIndex].optionb, questions[currentQuestionIndex].optionc, questions[currentQuestionIndex].optiond])
      setClickFifty(false);
    }
  }, [currentQuestionIndex])

  const handleSkipClick = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    if (currentQuestionIndex % 5 === 4) {
      // Move to the next round after every 5 questions
      setCurrentRound((prevRound) => prevRound + 1);
    }
  }

  const handleFiftyClick = () => {
    const question = questions[currentQuestionIndex]
    const correctIndex = Object.keys(optionLabel)
      .find(key => optionLabel[key] === question.correct_option);
    const newOption = []
    newOption.push(options[correctIndex])
    let random = Math.floor(Math.random() * 4)
    while (random === +correctIndex) {
      random = Math.floor(Math.random() * 4)
    }

    newOption.push(options[random])
    setFiftyOptions(newOption)
    setClickFifty(true);
  }

  const handleSwitchClick = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
  }

  const handleAnswerClick = (selectedAnswer) => {
    const correctOption = questions[currentQuestionIndex].correct_option;
    // console log for debugging
    console.log('correct option:', correctOption);

    // Map the correct option to the corresponding index (A->0, B->1, C->2, D->3)
    const correctIndex = correctOption.charCodeAt(0) - 'A'.charCodeAt(0);
    // console log for debugging
    console.log('correct index:', correctIndex);

    if (selectedAnswer === correctIndex) {
      // Handle correct answer logic
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
      navigate('/congrads', { state: { score } }); // pass the score as state
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

  return (
    <div className='container'>
      <img className='logo' src={Quiz} alt="quizjs" />

      {currentQuestionIndex > questions.length - 1 ? <span>No More questions</span> :

        <div className='game'>
          <p className='round'>Round {currentRound}</p>
          <p className='questions'>{currentQuestion.question}</p>
          <ul className='answers'>
            {options.map((option, index) => {
              return (
                <li>
                  <button className='buttons' onClick={() => handleAnswerClick(index)}>
                    {optionLabel[index]}.{clickFifty ? fiftyOptions.includes(option) ? option : "" : option}
                  </button>
                </li>)
            })}

          </ul>
          {showDudeImage && <img className='dude' src={Dude} alt='Dude' />}
          <p className='lives'>Lives: {Array.from({ length: lives }, (_, index) => '❤️').join(' ')}</p>
          <p className='score'>Score: {score}</p>
          {showHint && <p className='hint'>Hint: {currentQuestion.hint}</p>}
          <button className='h-button' onClick={handleHintClick}>🤨Hint</button>
          <button className='s-button' onClick={handleSkipClick}>Skip</button>
          <button disabled={options.length < 4} className='fifty-fifty-button' onClick={handleFiftyClick}>50/50</button>
          <button className='switch-button' onClick={handleSwitchClick}>Swap</button>
        </div>
      }
    </div>
  );
};

export default QuizComponent;




