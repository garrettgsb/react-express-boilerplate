import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function PercentageCircles(props) {
  const getColour = (r) => {
    return r > 50 ? "green" : "red"
  }

  return (
    <div className="percentage-circles">
      <div className="percentage-circle" style={{width: 80, height: 80}}>
        <h3>Landlord Approval</h3>
          <CircularProgressbar
            value={props.building.landlord_ratio}
            text={`${props.building.landlord_ratio}%`}
            strokeWidth={10}
            styles = {buildStyles({
              textColor: getColour(props.building.landlord_ratio),
              pathColor: getColour(props.building.landlord_ratio)
            }
            )}
          />
        <h3>Recommend to Friend</h3>
          <CircularProgressbar
            value={props.building.recommend_to_friend_ratio}
            text={`${props.building.recommend_to_friend_ratio}%`}
            strokeWidth={10}
            styles = {buildStyles({
              textColor: getColour(props.building.recommend_to_friend_ratio),
              pathColor: getColour(props.building.recommend_to_friend_ratio)
            }
            )}
          />
      </div>
    </div>
  )
}