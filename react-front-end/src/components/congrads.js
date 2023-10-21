import React, { useState } from 'react';
import "../style/congrads.css";
import { useNavigate } from 'react-router-dom';
import Quiz from "../asset/THELOGO.png";

const Congrats = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

    // State variables for form fields
    const [name, setName] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform actions with form data (e.g., send to server)
      console.log('Submitted:', { name });
    };
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
