import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Steptracker() {
  const [highestStep, setHighestStep] = useState(0); //false means default
  const handleProgress = () => {
    axios
      .post('/progresstracker/progress', {
        highest_steps: 1,
      })
      .then(() => {
        console.log('success!')
        // setHighestStep(true); //true means they clicked it
      });
  };
 
  return (
    <button onClick={handleProgress}>Click me</button>
  )
}

//In the front end, use onclick{handleProgress}
//{highestStep ? <button/> : <button />}
