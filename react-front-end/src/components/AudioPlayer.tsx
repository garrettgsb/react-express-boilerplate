import React from "react";
import { IAudioProps } from "../interfaces/AudioPlayerInterfaces";

const audioPlayer = (props: IAudioProps) => {

  return (
    <audio autoPlay className="media">
      <source src={props.src} type="audio/mpeg" />
      Your browser does not support MP3
    </audio>
  )

}

export default audioPlayer