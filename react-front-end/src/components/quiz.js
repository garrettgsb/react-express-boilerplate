// quiz.js
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../style/quiz.css";
import Dude from "../asset/dude.png";
import Dude2 from "../asset/thumbs-down.png";
import Dude3 from "../asset/thinking-dude.png";
import Header from "./header";
import { AppContext } from "./AppContext";
import { handleAudio, sounds } from "./SoundHelper";

const QuizComponent = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [lives, setLives] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [showDudeImage, setShowDudeImage] = useState(false); // thumbs up
  const [options, setOptions] = useState([]);
  const [fiftyOptions, setFiftyOptions] = useState([]);
  const [clickFifty, setClickFifty] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [swapCount, setSwapCount] = useState(0);
  const [hintCount, setHintCount] = useState(0);
  const [fiftyCount, setFiftyCount] = useState(0);
  const [skipCount, setSkipCount] = useState(0);

  const timerDuration = 300; // five minute timer

  const [clickSwap, setClickSwap] = useState(false);
  const [numberOfquestionsPerRound, setNumberOfQuestionsPerRound] = useState(0);
  const [showDude2Image, setShowDude2Image] = useState(false); // thumbs down
  const [showDude3Image, setShowDude3Image] = useState(true); // thinking face
  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(timerDuration);
  const [finishQuiz, setFinishQuiz] = useState(false);

  const [finishTime, setFinishTime] = useState(null)

  const optionLabel = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

  const fetchQuestions = () => {
    fetch(`http://localhost:8080/api/questions/${currentRound}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data.questions);
        setTotalQuestions(data.questions.length);
        const opts = [
          data.questions[currentQuestionIndex].optiona,
          data.questions[currentQuestionIndex].optionb,
          data.questions[currentQuestionIndex].optionc,
          data.questions[currentQuestionIndex].optiond,
        ];
        setOptions(opts);
        setFiftyOptions(opts);
        setCurrentQuestionIndex(0);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }

  useEffect(() => {
    // Fetch questions
    fetchQuestions();
  }, [currentRound]);

  useEffect(() => {
    // record start time
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setGameOver(true);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const opts = [
        questions[currentQuestionIndex].optiona,
        questions[currentQuestionIndex].optionb,
        questions[currentQuestionIndex].optionc,
        questions[currentQuestionIndex].optiond,
      ];
      setOptions(opts);
      setFiftyOptions(opts);
    }
  }, [currentQuestionIndex]);

  const handleFiftyClick = () => {
    const question = questions[currentQuestionIndex];
    const correctIndex = Object.keys(optionLabel).find(
      (key) => optionLabel[key] === question.correct_option
    );
    const newOption = [];
    newOption.push(options[correctIndex]);
    let random = Math.floor(Math.random() * 4);
    while (random === +correctIndex) {
      random = Math.floor(Math.random() * 4);
    }

    newOption.push(options[random]);
    setFiftyOptions(newOption);
    setClickFifty(true);
    setFiftyCount(fiftyCount + 1);
    handleAudio(state.isMute, sounds.fifty);
  };

  const handleSwapClick = () => {
    if (numberOfquestionsPerRound + (1 % 5) === 4) {
      setCurrentRound((prevRound) => prevRound + 1);
      setCurrentQuestionIndex(0);
      setNumberOfQuestionsPerRound(0);
      setClickFifty(false);
      setClickSwap(false);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setClickSwap(true);
      setSwapCount(swapCount + 1);
    }
    handleAudio(state.isMute, sounds.swap);
  };

  const handleAnswerClick = (selectedAnswer) => {
    const correctOption = questions[currentQuestionIndex].correct_option;

    // Map the correct option to the corresponding index (A->0, B->1, C->2, D->3)
    const correctIndex = correctOption.charCodeAt(0) - "A".charCodeAt(0);

    if (selectedAnswer === correctIndex) {
      // Handle correct answer logic
      if (hintUsed || clickFifty) {
        setScore((prevScore) => prevScore + 10);
      } else {
        setScore((prevScore) => prevScore + 20);
      }

      setShowDudeImage(true);
      setShowDude2Image(false);
      setShowDude3Image(false);

      setTimeout(() => {
        setShowDudeImage(false);
        setShowDude3Image(true);
      }, 1500);
      handleNextClick();
      handleAudio(state.isMute, sounds.correct);
    } else {
      setLives((prevLives) => prevLives - 1);
      setShowDudeImage(false);
      setShowDude2Image(true);
      setShowDude3Image(false);

      setTimeout(() => {
        setShowDude2Image(false);
        setShowDude3Image(true);
      }, 1500);
      handleNextClick();
      handleAudio(state.isMute, sounds.incorrect);
    }
  };

  const handleHintClick = () => {
    setHintUsed(true); // Set hintUsed to true when the hint is clicked
    setShowHint(true); // Show the hint
    handleAudio(state.isMute, sounds.hint);
    setHintCount(hintCount + 1);
  };

  const handleSkipClick = () => {
    setSkipCount(skipCount + 1);
    handleNextClick();
    handleAudio(state.isMute, sounds.skip);
  };
  const createFinishTime = () => {
    const endTime = new Date();
    setFinishTime(formatTime(endTime - startTime))
  }

  // useEffect to navigate when finishQuiz is true
  useEffect(() => {
    if (finishQuiz) {
      try {
        navigate("/congrads", {
          state: {
            score, lives, finishTime, hintCount,
            swapCount, fiftyCount, skipCount, startTime
          }
        });
      } catch (error) {
        console.error("Error navigating to /congrads:", error);
      }
    }
  }, [finishQuiz, navigate, score]);

  const handleNextClick = async () => {
    if (currentRound === 3 && numberOfquestionsPerRound + 1 === 5) {
      createFinishTime();
      setFinishQuiz(true);
    } else if (numberOfquestionsPerRound % 5 === 4) {
      setCurrentRound((prevRound) => prevRound + 1);
      setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
      setNumberOfQuestionsPerRound(0);
      setClickFifty(false);
      setClickSwap(false);
      setHintUsed(false);
      setShowHint(false);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
      setNumberOfQuestionsPerRound((prevIndex) => prevIndex + 1);
      setHintUsed(false);
      setShowHint(false);
    }

    if (lives === 1) {
      const timeDifference = createFinishTime();
      setGameOver(true);
      navigate("/quiz");
    }
    console.log("score:", score);
    console.log("lives:", lives);
  };

  if (questions.length === 0) {
    return <p>Loading...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handlePlayAgain = () => {
    setGameOver(false);
    setTimer(timerDuration); // Reset the timer to its initial value
    setCurrentQuestionIndex(0); // Reset the current question index to 0 or any other initial value
    setCurrentQuestionNumber(1);
    setCurrentRound(1); // Reset the current round to 1 or any other initial value
    setLives(5); // Reset the lives to their initial value
    setShowHint(false); // Reset the hint display
    setScore(0); // Reset the score to 0 or any other initial value
    setHintUsed(false); // Reset the hintUsed flag
    setShowDudeImage(false);
    setOptions([]); // Reset the options
    setFiftyOptions([]);
    setClickFifty(false);
    setStartTime(new Date());
    fetchQuestions();
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="quiz-container">
      <Header page="quiz" />

      {!gameOver && (
        <div className="game">
          <span className="round">
            <p>
              Round {currentRound}
            </p>
          </span>
          <p className="question-number">{`Question: ${currentQuestionNumber}/${totalQuestions}`}</p>
          <p className="questions">{currentQuestion.question}</p>
          <div className="middle">
            <ul className="answers">
              {options.map((option, index) => (
                <li key={index}>
                  <button
                    className="buttons"
                    onClick={() => handleAnswerClick(index)}
                    onMouseEnter={() => {
                      handleAudio(state.isMute, sounds.hover);
                    }}
                  >
                    {optionLabel[index]}.&nbsp;
                    {fiftyOptions.length === 2
                      ? fiftyOptions.includes(option)
                        ? option
                        : ""
                      : option}
                  </button>
                </li>
              ))}
            </ul>
            {showDudeImage && <img className="dude" src={Dude} alt="Dude" />}
            {showDude2Image && (
              <img className="dude2" src={Dude2} alt="Dude2" />
            )}
            {showDude3Image && (
              <img className="dude3" src={Dude3} alt="Dude3" />
            )}
          </div>
          <p className="lives">
            Lives: {Array.from({ length: lives }, (_, index) => "❤️").join(" ")}
          </p>
          <p className="your-score">Score: {score}</p>
          <p className="timer">
            Time Left: {Math.floor(timer / 60)}:
            {(timer % 60).toString().padStart(2, "0")}
          </p>{" "}
          {showHint && <p className="hint">Hint: {currentQuestion.hint}</p>}
          <div className="powerUpButtons">
            <button
              className="h-button"
              onClick={handleHintClick}
              onMouseEnter={() => {
                handleAudio(state.isMute, sounds.hover);
              }}
            >
              Hint
            </button>
            <button
              className="s-button"
              onClick={handleSkipClick}
              onMouseEnter={() => {
                handleAudio(state.isMute, sounds.hover);
              }}
            >
              Skip
            </button>
            <button
              disabled={options.length < 4 || clickFifty}
              className="fifty-fifty-button"
              onClick={handleFiftyClick}
              onMouseEnter={() => {
                handleAudio(state.isMute, sounds.hover);
              }}
            >
              50/50
            </button>
            <button
              disabled={clickSwap}
              className="switch-button"
              onClick={handleSwapClick}
              onMouseEnter={() => {
                handleAudio(state.isMute, sounds.hover);
              }}
            >
              Swap
            </button>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="game-over-popup">
          <h1>Game Over!</h1>
          <li>Final Score: {score}</li>
          <li>Time taken to complete the quiz: {finishTime}</li>
          <li>Total hints used: {hintCount}</li>
          <li>Total swap used: {swapCount}</li>
          <li>Total 50:50 used: {fiftyCount}</li>
          <li>Total skip used: {skipCount}</li>
          <div className="game-over-buttons">
            <button onClick={handlePlayAgain}>Play Again</button>
            <button onClick={handleHomePage}>Main Page</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to format milliseconds into a readable time format
const formatTime = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  return `${minutes} minutes and ${seconds % 60} seconds`;
};

export default QuizComponent;
