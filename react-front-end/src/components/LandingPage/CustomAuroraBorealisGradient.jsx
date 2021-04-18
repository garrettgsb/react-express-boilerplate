import React from 'react'

const CustomAuroraBorealisGradient = () => (
  <svg>
    <defs>
      <linearGradient id="custom-gradient-element-id" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#d08770">
          <animate
            attributeName="stop-color"
            dur="4s"
            repeatCount="indefinite"
            // values="#d08770; #ebcb8b; #d08770"
          />
        </stop>
        <stop offset="50%" stopColor="#ebcb8b">
          <animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="#ebcb8b; #a3be8c; #ebcb8b" />
        </stop>
        <stop offset="100%" stopColor="#a3be8c">
          <animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="#a3be8c; #b48ead; #a3be8c" />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default CustomAuroraBorealisGradient;