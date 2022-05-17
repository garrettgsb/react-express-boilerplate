import React from "react";



// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const ProgressCircle = (props) => {
  const percentage = Math.floor((props.total_saved / props.goalTotal_cents) * 100);
  return (
    
  <div>
    <div style={{ width: "100%" }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
  </div>
)
};

export default ProgressCircle


