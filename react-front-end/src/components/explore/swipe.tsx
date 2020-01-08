import React, { useState, FC, Fragment, useEffect, useCallback } from 'react'

import { useSprings, useSpring, useTransition, animated, interpolate, SpringValue } from 'react-spring'
import { useGesture, useScroll } from 'react-use-gesture'
import styled from 'styled-components';
import axios from 'axios';


interface SwipeProps {
  // style?: React.CSSProperties | undefined
};
interface AttractionsObject {
  id: string,
  name: string,
  description: string,
  review: number | null,
  lat: number,
  long: number,
  open_time: number | null,
  close_time: number | null,
  visit_duration: number | null,
  photo: string
  location: string,
};



interface StyleProps {
  opacity: string | SpringValue<number>,
  transform: string | SpringValue<string>
};


export const Swipe: FC<SwipeProps> = () => {
  
  const [attractions, setAttractions] = useState<AttractionsObject[]>([]);
  // const [attractionsShuffle, setAttractionsShuffle] = useState<AttractionsObject[]>([]);
  let pages: Array<any>;
  pages = [];

  useEffect(() => {

    axios.defaults.baseURL = 'http://localhost:8081';
    axios.get(`api/attractions`)
    .then(res => {
      console.log('check res received', res.data)
      setAttractions(res.data)
    });
  },[])

  //helper functions

  function shuffleAttractions(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function animateAttractions(array: Array<any>) {
    let swiping: Array<any>;
    swiping = []
    for (let i of array) {
      swiping.push(({ style } : {style: StyleProps}) => <animated.div style={{ ...style, background: 'lightpink' }}>${i}</animated.div>)
    }
    return swiping;
  };
  const attractionsShuffle = shuffleAttractions(attractions)
  
  pages = animateAttractions(attractionsShuffle)

  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  console.log('transitions', transitions);
  console.log('pages', pages);

  return (
    pages != [] ?
    <Fragment>
      <div className="container" onClick={onClick}>
        
        {/* {transitions.map(({ item, props, key }) => {
          const Swipe = pages[item]
          return (<Swipe key={key} style={props}/>)
        })} */}
      </div>
    </Fragment>
    : 
    <Fragment>

    </Fragment>
  );

  
  
};

// return (
  //   <Fragment>
  //     <Swiping>
  //       <div className="container" {...bind()} >
  //         {attractions.map(attraction => (
  //           <Card>
  //             <animated.div
  //               key={attraction.name}
  //               className="card"
  //               style={{
  //                 ...style,
  //                 backgroundImage: `url(${attraction.photo})`
  //               }}
  //             >{attraction.name}</animated.div>
  //           </Card>
  //         ))}
  //       </div>
  //     </Swiping>
  //   </Fragment>
  // );
// const pages = [
//   ({ style } : {style: StyleProps}) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
//   ({ style } : {style: StyleProps}) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ style } : {style: StyleProps}) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]


// const [swipeRight, setSwipeRight] = useState(() => new Set());
  // const [swipeLeft, setSwipeLeft] = useState(() => new Set());

  // const bind = useScroll(event => {
  //   set({
  //     transform: `perspective(500px) rotateX(${
  //       event.scrolling ? event.delta[0] : 0
  //     }deg)`
  //   });
  // });


  //TESTING SLIDING ANIMATION
  
  // const [style, setStyle] = useState<StyleProps>();
  
  // const pages = [
  //   ({ opacity, transform}: {opacity: string | SpringValue<number>, transform: string | SpringValue<string>}) => <animated.div style={{ opacity, transform, background: 'lightpink' }}>A</animated.div>,
  //   ({ opacity, transform}: {opacity: string | SpringValue<number>, transform: string | SpringValue<string>}) => <animated.div style={{ opacity, transform, background: 'lightblue' }}>B</animated.div>,
  //   ({ opacity, transform}: {opacity: string | SpringValue<number>, transform: string | SpringValue<string>}) => <animated.div style={{ opacity, transform, background: 'lightgreen' }}>C</animated.div>,
  // ]
  // const [index, set] = useState(0)
  // const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  // const transitions = useTransition(index, p => p, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })
  // return (
  //   <div className="simple-trans-main" onClick={onClick}>
  //     {transitions.map(({ item, props, key}) => {
  //       const Page = pages[item]
  //       return <Page key={key} opacity={props.opacity} transform={props.transform} />
  //     })}
  //   </div>
  // )

  // return (
  //   <Fragment>
  //     <Swiping>
  //       <div className="container" {...bind()} >
  //         {attractions.map(attraction => (
  //           <Card>
  //             <animated.div
  //               key={attraction.name}
  //               className="card"
  //               style={{
  //                 ...style,
  //                 backgroundImage: `url(${attraction.photo})`
  //               }}
  //             >{attraction.name}</animated.div>
  //           </Card>
  //         ))}
  //       </div>
  //     </Swiping>
  //   </Fragment>
  // );

  // interface SwipingEffect {
//   args: Array<any>,
//   down: any,
//   delta: Array<any>,
//   distance: any,
//   direction: Array<any>,
//   velocity: any
// };

//TESTING