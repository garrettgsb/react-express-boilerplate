import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Steptracker(props) {
  const [highestStep, setHighestStep] = useState(0);
  const handleProgress = () => {
    axios
      .post('/progresstracker/progress', {
        resource_id: props.resource_id
      })
      .then((res) => {

        if (res.data[0].count == '3') {
          alert("HURRRAAAAY ALMOST THERE")

        } else if (res.data[0].count == '8'){
          alert("YOU ARE DONE!")
        }

        console.log('FROM BE', res.data[0].count)

      })
      .catch(err => {
        console.log('err', err);
      })
  };

  return (
    <button onClick={handleProgress}>Click me</button>
  )
}