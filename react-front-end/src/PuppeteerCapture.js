// src/PuppeteerCapture.js

import React, { useState } from "react";
import axios from "axios";

const PuppeteerCapture = () => {
  const [screenshot, setScreenshot] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/capture-screenshot"
      );
      setScreenshot(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Capture Screenshot</button>
      {screenshot && (
        <img
          src={`data:image/png;base64,${screenshot}`}
          alt="Screenshot"
        />
      )}
    </div>
  );
};

export default PuppeteerCapture;
