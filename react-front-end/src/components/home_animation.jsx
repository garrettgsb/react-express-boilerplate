import React from "react";
import { useHistory } from "react-router-dom";

const HomeAnimation = (props) => {
  const history = useHistory();
  function handleClick() {
    history.push("/moods");
  }
  return (
    <div onClick={handleClick} className="HomeAnimation">
      <h1 className="Title">mindfull</h1>
      <img
        src={require("../animations/Pandagif.gif")}
        alt={"PandaGif"}
        width="375"
        height="736"
      ></img>
      <h3>Tap Anywhere To Enter</h3>
    </div>
  );
};

export default HomeAnimation;
