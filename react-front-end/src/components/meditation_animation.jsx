import React from "react";

const MeditationAnimation = (props) => {
  window.onload = function() {
    let minute = 9;
    let sec = 59;
    setInterval(function() {
      document.getElementById("timer").innerHTML = `${minute} : ${sec}`
      sec--;
      if (sec === 0o0) {
        minute --;
        sec = 59;
        if (minute === 0o0) {
          minute = 9;
        }
      }
    }, 1000);
  }

  return (
    <div className="MeditationAnimation">
       <h1>meditate</h1>
       <h2>with Pongo</h2>
      <img
        src={require("../animations/Pandagif.gif")}
        alt={"PandaGif"}
        width="375"
        height="812"
      ></img>
      <h3>breathe in <br/> breathe out
      <div id="timer">10:00</div> 
      </h3>
    </div>
  );
};

export default MeditationAnimation;
