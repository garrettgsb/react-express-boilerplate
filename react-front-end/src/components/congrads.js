import React from 'react';
import { useNavigate } from 'react-router-dom';

const Congrats = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Congratulations!</h1>
      <p>You've completed the quiz!</p>
  
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default Congrats;
