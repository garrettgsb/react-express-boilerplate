import React, { useState, useEffect } from 'react';

const Game = (props) => {
  const socket  = props.socket
  const [guess, setGuess] = useState('');

  useEffect(() => {
    console.log("This useEffect runs only once!")

    const sendGuess = () => {
      socket.emit('Guess', guess);
      console.log("Guess sent");
    }

  }, [socket]);

  return(
    <>
      <h2> THE GAME </h2>
      <form onSubmit = {sendGuess}>
        <input 
          type='text'
          id='guess' 
          placeholder='Enter guess'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}/>
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
export default Game