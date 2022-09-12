import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { message, Alert } from "antd";
import 'antd/dist/antd.css';
import '../styles/button.css';

export default function Steptracker(props) {
  const [showAlert, setShowAlert] = useState(false)
  
  const handleProgress = () => {
    axios
      .post('/progresstracker/progress', {
        resource_id: props.resource_id
      })
      .then((res) => {

        if (res.data[0].count == '3') {
          message.success("You're ALMOST THERE")
        } else if (res.data[0].count == '7'){
          setShowAlert(true)
        }

        console.log('FROM BE', res.data[0].count)

      })
      .catch(err => {
        console.log('err', err);
      })
  };

  const [buttonText, setButtonText] = useState('Click Me');
  const updateText = (text) => setButtonText(text);

  return (
    <div>
    <button id='complete-step' onClick={() => {
      updateText('Step Complete');
      handleProgress();
    }}>{buttonText}</button>
   
     {showAlert &&
      <Alert 
      message="HURRAY! 😄"
      description="CONGRATS! YOU HAVE COMPLETED THIS LEARNING PATH!"
      type="success"
      showIcon
      closable
      />
    }
    </div>
  )
}