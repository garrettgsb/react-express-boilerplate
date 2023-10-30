// congrads.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../style/congrads.css";
import Quiz from "../asset/THELOGO.png";
const Congrats = ({ onLeaderboardUpdate, setHighScores }) => {
  const navigate = useNavigate();
  const location = useLocation();
const [completionTime, setCompletionTime] = useState(null);
  
useEffect(() => {
  if (location.state) {
    const startTime = location.state.startTime;
    const endTime = new Date();
    const timeDifference = endTime - startTime;
    setCompletionTime(timeDifference);
  }
}, [location.state]);

  const handleBackToHome = () => {
    navigate('/');
  };

    // State variables for form fields
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [name, setName] = useState('');

    // Access the score from the location state
  const score = location.state && location.state.score;
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Perform actions with form data (e.g., send to server)
      console.log('Submitted:', { name, score });
     
      // Send data to the server
      try {
        const response = await fetch('/api/high-scores', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, score }),
        });

    // the status and status text
console.log('Response Status:', response.status);
console.log('Response Status Text:', response.statusText);

// convert the response body to JSON
const responseBody = await response.json();
console.log('Response Body:', responseBody);

        if (response.ok) {
          setSubmissionMessage('Your score has been submitted successfully');
          console.log('Score submitted successfully');
          // Optionally, you can update the state or perform other actions here
          onLeaderboardUpdate();
         
        } else {
          setSubmissionMessage('Failed to submit score');
          console.error('Failed to submit score');
        }
      } catch (error) {
        setSubmissionMessage('Error submitting score');
        console.error('Error submitting score:', error);
      }

        };
  return (
    <div className='container'>
      <h1 className='title'>Congratulations!</h1>
      <h2 className='on'>ON</h2>
      <h2 className='completing'>COMPLETING</h2>
      <img className="logo" src={Quiz} alt="quizjs" />
      <h1>Your final score: {score}</h1>
      {completionTime && (
        <h2>Time taken to complete the quiz: {formatTime(completionTime)}</h2>
      )}
      <form className='myForm' onSubmit={handleSubmit}>

      {submissionMessage && <h2>{submissionMessage}</h2>}

          <label className='name'>
          Enter your nickname here!!
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button className='submit' type="submit">Submit</button>
        </form>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

// Helper function to format milliseconds into a readable time format
const formatTime = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  return `${minutes} minutes and ${seconds % 60} seconds`;
};

export default Congrats;
