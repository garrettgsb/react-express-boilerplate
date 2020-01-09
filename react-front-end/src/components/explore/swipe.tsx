import React, { useState, FC, Fragment, useEffect, useCallback } from 'react'

import { useSprings, useSpring, useTransition, animated, interpolate, SpringValue } from 'react-spring'
import { useGesture, useScroll } from 'react-use-gesture'
import styled from 'styled-components';
import axios from 'axios';


interface SwipeProps {
  // style?: React.CSSProperties | undefined
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  
};

// interface FormProps {
//   handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }
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

const Swiping = styled.div`
  // height: 100%;
  position: absolute;
  width: 100%;
`;


export const Swipe: FC<SwipeProps> = ({handleSubmit}) => {
  const [attractions, setAttractions] = useState<Array<AttractionsObject>>([]);
  let pages: Array<any>;
  pages = [];
  // const [value, setValue] = useState<AttractionsObject | {}>({});
  let value: string | null;
  useEffect(() => {

    axios.defaults.baseURL = 'http://localhost:8081';
    axios.get(`api/attractions`)
    .then(res => {
      console.log('check res received', res.data)
      setAttractions(res.data)
    });
  },[])

  //helper functions

  //submit the attractions to database
  handleSubmit = () => {
    // e.preventDefault();
    console.log('check');
    console.log(value)
    axios.defaults.baseURL = 'http://localhost:8081';
    axios.post(`/explore/attractions/:${value}`)
    .then(() => {
      // history.push(`/explore/:${search.query}`);
    })
  };
  //to shuffle all attractions in a random way
  function shuffleAttractions(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //to create animation effect for the component
  function animateAttractions(array: Array<any>) {
    let swiping: Array<any>;
    swiping = []
    for (let i of array) {
      swiping.push(
        ({ style } : {style: StyleProps}) => 
          <Swiping>
            <form onSubmit={handleSubmit}>
              <animated.div style={{ ...style, background: `url(${i.photo})` }}>
                ${i.name}
              </animated.div>
            </form>
            <button type="submit">Submit</button>
          </Swiping>
      )
    }
    return swiping;
  };

  const attractionsShuffle = shuffleAttractions(attractions)
  
  pages =  animateAttractions(attractionsShuffle)
  
  //animation part using react-spring

  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1)), []);

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)', height: '300px' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  
  return (
    <Fragment>
      <div className="container" onClick={onClick}>
        {pages.length && transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props}/>
        })}
      </div>
    </Fragment>
  );
  
};