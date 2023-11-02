import React, { useState } from 'react'
import InstructionImage from "../asset/instruction.png";
import Quiz from "../asset/THELOGO.png";
import 'animate.css';
import SoundOn from "../asset/Sound_on.png";
import SoundOff from "../asset/Sound_off.png";

const [volume, setVolume] = useState(true)

function header(props) {

  function muteButton() {
    if (volume === true) {
      return <img src={SoundOn} alt="sound on" className="mute-button" />
    }
    if (volume === false) {
      return <img src={SoundOff} alt="sound off" className="mute-button" />
    }
    //{muteButton()}
  }


  if (props.page === "home") {
    return (
      <div className="top-page">
        <div className="quizjs">
          <img className="animate__animated animate__backInDown" src={Quiz} alt="quizjs" />
        </div>
      <div className="des-container">
        <div className="des">
          <h1>QuizJS is a series of questions that defy conventional thinking and logic.</h1>
          <h1>Test your wit against a series of fun, unexpected, and absurd questions!</h1>
        </div>
      </div>

    </div>
    )
  }

  if (props.page === "instructions") {
    return (
      <div className="top-page">
        <div className="quizjs">
          <img src={InstructionImage} alt="quizjs" className="instruction-image" />
        </div>
      </div>
    )
  }

  if (props.page === "quiz") {
    return (
      <div className="top-page">
        <div className="quizjs">
          <img className="logo" src={Quiz} alt="quizjs" />
        </div>
      </div>
    )
  }
  
  if (props.page === "congrads") {
    return (
      <div className="top-page">
        <div className="quizjs">
          <img className="logo" src={Quiz} alt="quizjs" />
        </div>
      </div>
    )
  }

  else {
    return (
      <h1>header</h1>
    )
  }
};


export default header;