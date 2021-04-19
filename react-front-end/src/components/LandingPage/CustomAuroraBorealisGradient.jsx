import React from 'react'

const CustomAuroraBorealisGradient = () => (
  <svg className='landing-page'>
    <defs>
      <linearGradient id="custom-gradient-element-id" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#d064bc">
          <animate
            attributeName="stop-color"
            dur="6s"
            repeatCount="indefinite"
            // values="#d08770; #ebcb8b; #d08770"
          />
        </stop>
        <stop offset="50%" stopColor="#55b1ba">
          <animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="#55b1ba; #8ed7a9; #55b1ba" />
        </stop>
        <stop offset="100%" stopColor="#8ed7a9">
          <animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="#8ed7a9; #d8f7df; #8ed7a9" />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default CustomAuroraBorealisGradient;