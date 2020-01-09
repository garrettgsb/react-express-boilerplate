import React, { useState, FC, Fragment, useEffect, useCallback } from 'react';

import { useSprings, useSpring, useTransition, animated, interpolate, SpringValue } from 'react-spring';
import { useGesture, useScroll } from 'react-use-gesture';
import Slider from 'react-animated-slider';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";


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

// const Swiping = styled.div`
//   // height: 100%;
//   // position: absolute;
//   width: 100%;
// `;

// const Container = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 200px;
//   // transform: translate3d(100%,0,0);
// `;

// const Attraction = styled.div`
//   padding: 10px;
//   height: 100%;
//   width: 100 %;
//   background-size: 100%;
//   background-position: center;
// `;

const animation = keyframes`
  from: {
    opacity: 0
  },
  to: {
    transition: all 0.3s ease;
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
    opacity: 1;
  }
`;

const animation1 = keyframes`
  from: {
    opacity: 0
  },
  to: {
    transition: all 0.3s ease;
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    opacity: 1;
  }
`;


const Container = styled.div`
  position: relative;
  height: 50vh;
  weight: auto;
  border: solid;
  margin: 1px 1px;
  overflow: hidden;
  &.slide::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.9)));
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
      bottom: 0;
      left: 0;
  }
  
  &.previousButton, .nextButton {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: url('http://svgshare.com/i/41_.svg') no-repeat center center / 16px;
      width: 32px;
      height: 32px;
      text-indent: -9999px;
      cursor: pointer;
  }
  
  &.previousButton:hover, &nextButton:hover {
  background: url('http://svgshare.com/i/41_.svg') no-repeat center center / 16px;
  }
  
  &.previousButton {
    left: 0;
    -webkit-transform: rotate(180deg) translateY(calc(50% + 0px));
            transform: rotate(180deg) translateY(calc(50% + 0px));
  }
  
  &.previousButton:hover {
    left: -10px;
  }
  
  &.nextButton {
    right: 0;
  }
  
  &.nextButton:hover {
    right: -10px;
  }
`
const SliderContent = styled.div`
  text-align: center;
  opacity: 1;
  height: 100px;
  background-size: cover;
`;

const Inner = styled.div`
  padding: 0 70px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
`;
const Name = styled.h4`
  font-weight: 600;
  margin: 0 auto;
  max-width: 640px;
  color: #000000;
  font-size: 20px;
  line-height: 1;
  animation: ${animation1};
`;

const Button = styled.button`
  -webkit-appearance: none;
  appearance: none;
  -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
  -webkit-transition: all .5s ease;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  border: none;
  background: #FFD800;
  border-radius: 30px;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 15px 30px;
  font-weight: 400;
  font-size: 10px;
  cursor: cursor;
  &:hover {
    color: #FFFFFF;
    background: #222222;
    -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  }
  animation: ${animation};
`;

const Description = styled.p`
  color: #000000;
  font-size: 14px;
  line-height: 1.5;
  margin: 20px auto 30px;
  max-width: 640px;
  animation: ${animation};
`;




// const Name = styled.div`
// `;
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

  const attractionsShuffle = shuffleAttractions(attractions)
  
  return (
    <Container>
      <Slider className="slider-wrapper">
          {attractionsShuffle.map((item, index) => (
            <form onSubmit={handleSubmit}>
            <SliderContent
              key={index}
              className="slider-content"
              style={{ background: `url('${item.photo}') no-repeat center center` }}
            >
              <Inner className="inner">
                <Name>{item.name}</Name>
                <Description>{item.location}</Description>
                <Button>Select</Button>
              </Inner>
            </SliderContent>
            </form>
          ))}
    </Slider>
    </Container>
  );
};
    // return (
    //   <Fragment>
    //     <h4>Attractions</h4>
    //     <Container>
    //       {attractionsShuffle.length && attractionsShuffle.map(attraction => {
    //         return (
    //           <Attraction style={{ backgroundImage: `url(${attraction.photo})`}}>
    //             <p>{attraction.name}</p>
    //             <p>{attraction.location}</p>
    //             <p>{attraction.review}</p>
    //           </Attraction>
    //         )
    //       })}
    //     </Container>
    //   </Fragment>
    // );