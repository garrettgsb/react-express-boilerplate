// import { render } from 'react-dom'
import React, { useState } from 'react';
import { useSpring, animated as a }from 'react-spring';
import '../styles/FlashCard.css';

console.log(React.version)


export default function FlashCard(props) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  // const { 
  //   question,
  //   image,
  //   hint,
  //   answer,
  //   resources
  // } = props;


  return (
    <div onClick={() => set(state => !state)}>
      <a.div className="c front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <p>Hint *</p>
        <p className="question">Question?!</p>
        
      </a.div>

      <a.div className="c back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <p>Resources *</p>
        <p className="answer">ANSWER!</p>


      </a.div>

    </div>
  )
}