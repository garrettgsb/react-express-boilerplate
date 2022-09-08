import React from "react";
import { useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [stepCompleted, setStepCompleted] = useState(false);
  const handleProgress = () => {
    axios
      .post("/progress", {
        steps_complete: true,
      })
      .then(() => {
        setStepCompleted(true);
      });
  };
}
