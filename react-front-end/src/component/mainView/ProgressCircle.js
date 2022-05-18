import React from "react";



// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const ProgressCircle = (props) => {
  const percentage = ((props.total_saved / props.goalTotal_cents) * 100).toFixed(1);
  return (
    
  <div>
    <div style={{ width: "100%" }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
  </div>
)
};

export default ProgressCircle


