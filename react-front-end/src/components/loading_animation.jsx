import React from "react";
import pandamation from "../animations/PandaAnimation.mp4"

const LoadingAnimation = (props) => {
  return (
    <div className="LoadingAnimation">
      <h1>Loading</h1>
        <video loop autoPlay src={pandamation} width="375" height="812"  autoplay="true" />
        <h3>Just Breathe</h3>
    </div>
  );
};

export default LoadingAnimation;
