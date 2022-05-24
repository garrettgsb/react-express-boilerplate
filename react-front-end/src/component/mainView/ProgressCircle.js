import React from "react";
import '../../sass/savings.scss';

// Import module and default styles
// import CircularProgressbar, { buildStyles } from "react-circular-progressbar";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const ProgressCircle = (props) => {

  const percentage = ((props.total_saved / props.goalTotal_cents) * 100).toFixed(1);
  return (

    <div>
      <div className='circle' style={{ width: "80%" }}>
        <CircularProgressbar
          key='Circle'
          percentage={percentage}
          text={`${percentage}%`}
          styles={{
            path: {
              stroke: "rgb(238,177,39)",
              transition: 'stroke-dashoffset 0.5s ease 0s'
            },
            trail: {
              stroke: 'rgba(126, 126, 126, 0.5)'
            },
            text: {
              fill: "rgb(238,177,39)"
            }
          }}
        />
      </div>
    </div>
  )
};

export default ProgressCircle


