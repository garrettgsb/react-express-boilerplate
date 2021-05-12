import React from "react";
import pandamation from "../animations/PandaAnimation.mp4"

const HomeAnimation = (props) => {
  return (
    <div onClick={() => {
      alert("Click to Enter");
    }} className="HomeAnimation">
      <h1 className="Title">mindfull</h1>
        <video loop autoPlay src={pandamation} width="375" height="812"  autoplay="true" />
        <h3>Tap Anywhere To Enter</h3>
    </div>
  );
};

export default HomeAnimation;
