import React, { useState, useEffect } from 'react';

const Game = (props) => {
  const socket  = props.socket
  const [guess, setGuess] = useState('');

  const sendGuess = (e) => {
    e.preventDefault();
    console.log(`${props.username}: ${guess}`)
    socket.emit('Guess', guess);
  }

  useEffect(() => {
    socket.on('chat-messages', (message) => {
      console.log(message);
    })
  }, []);

  return(
    <>
      <h2> THE GAME </h2>
      <form onSubmit = {(e) => sendGuess(e)}>
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