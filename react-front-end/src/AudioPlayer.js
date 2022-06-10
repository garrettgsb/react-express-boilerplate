import React from "react";

const audioPLayer = (props) => {

  return (
    <audio autoPlay name="media">
      <source src={props.src} type="audio/mpeg" />
      Your browser does not support MP3
    </audio>
  )

}

export default audioPLayer