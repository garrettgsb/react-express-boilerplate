import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import 'antd/dist/antd.css';
import '../styles/button.css';

export default function Steptracker(props) {
  const [buttonText, setButtonText] = useState('Complete Step');
  const [stepCompleted, setStepCompleted] = useState(false);
  // Add useEffect

  const handleProgress = () => {
    axios
      .post('/progresstracker/progress', {
        resource_id: props.resource_id
      })
      .then((res) => {
        console.log('FROM BE', res.data.count)
        setButtonText('Step Completed')
        setStepCompleted(true)

      })
      .catch(err => {
        console.log('err', err);
      })
  };
  return (
    <div>
    <button id='complete-step' className={stepCompleted && "step-complete"} onClick={handleProgress} >{buttonText}</button>
    </div>
  )
}