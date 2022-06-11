import React, { useState, useEffect } from 'react';

const Game = (props) => {
  const socket  = props.socket

  useEffect(() => {
    console.log("This useEffect runs only once!")

  }, [socket]);

  return(
    <h2> THE GAME </h2>
  )
}
export default Game