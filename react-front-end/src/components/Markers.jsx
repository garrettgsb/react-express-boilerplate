import React from "react";
import "./Marker.css";

// export default function Markers({ text , $hover}) {
  
//   const handleActiveMarker = (marker) => {
//     if(marker) {
//       return;
//     }
//   }





//   return (
//     <div className="map-marker">

//     </div>
//   )
// }

const Markers = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default Markers;
