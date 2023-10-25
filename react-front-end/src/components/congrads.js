import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../style/congrads.css";
import Quiz from "../asset/THELOGO.png";

const Congrats = ({ onLeaderboardUpdate }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToHome = () => {
    navigate('/');
  };

    // State variables for form fields
    const [name, setName] = useState('');

    // Access the score from the location state
  const score = location.state && location.state.score;
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform actions with form data (e.g., send to server)
      console.log('Submitted:', { name, score });
      onLeaderboardUpdate();

       // Navigate to the home page
    navigate('/');
    };

    // For demonstration purposes, store data locally

    const leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboardData.push({ name, score: score });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));


   

  return (
    <div className='container'>
      <h1 className='title'>Congratulations!</h1>
      <h2 className='on'>ON</h2>
      <h2 className='completing'>COMPLETING</h2>
      <img src={Quiz} alt="quizjs" />
      <form className='myForm' onSubmit={handleSubmit}>
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

export default Congrats;
