import React, { useState, FC, Fragment, useEffect } from 'react'
import { useSprings, useSpring, animated, interpolate } from 'react-spring'
import { useGesture, useScroll } from 'react-use-gesture'
import styled from 'styled-components';
import Axios from 'axios';
// import './styles.css'


interface SwipeProps {
  // i?:number
  // useGesture: (e: React.SyntheticEvent) => void,
  // useSprings: (e: React.SyntheticEvent<EventTarget>) => void
}
const to = (i:number) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i:number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

// function Deck() {
//   const [gone] = useState(() => new Set())
//   const [props, set] = useSprings(cards.length, i => ({...to(i), from: from(i)}));
//   const bind = useGesture(
//     ({
//       args: [index],
//       down,
//       delta: [xDelta],
//       distance,
//       direction: [xDir],
//       velocity
//     }) => {
//     const trigger = velocity > 0.2
//     const dir = xDir < 0 ? -1 : 1
//     if (!down && trigger) gone.add(index)
//     set(i => {
//       if (index !== i) return
//       const isGone = gone.has(index)
//       const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
//       const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
//       const scale = down ? 1.1 : 1
//       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
//     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//   })
//   return props.map(({ x, y, rot, scale }, i) => (
//     <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//     </animated.div>
//   ))
// };

// const Swiping = () => {
//   const [style, set] = useSpring(() => ({
//     transform: "perspective(500px) rotateY(0deg)"
//   }));

//   const bind = useScroll(event => {
//     set({
//       transform: `perspective(500px) rotateY(${
//         event.scrolling ? event.delta[0] : 0
//       }deg)`
//     });
//   });

//   return (
//     <>
//       <div className="container" {...bind()}>
//         {movies.map(src => (
//           <animated.div
//             key={src}
//             className="card"
//             style={{
//               ...style,
//               backgroundImage: `url(${src})`
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
const Swiping = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;
`;
const Card =styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Swipe: FC<SwipeProps> = () => {

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));
  
  const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
  ]
  

  useEffect(() => {
  
    // Axios.get()
  },[]);
  

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`
    });
  });
  
  return (
    <Fragment>
      <h2>check</h2>
      <Swiping>

        <div className="container" {...bind()}>
          {cards.map(card => (
            <Card>
              <animated.div
                key={card}
                className="card"
                style={{
                  ...style,
                  backgroundImage: `url(${card})`
                }}
              />
            </Card>
          ))}
        </div>
      </Swiping>
    </Fragment>
  );
  // return (
  //   <Fragment>
  //     <Deck></Deck>
  //   </Fragment>
  // );
};

