import React from "react";



// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const percentage = 68;

const ProgressCircle = () => (
  <div>
    <div style={{ width: "100%" }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
  </div>
);

export default ProgressCircle


