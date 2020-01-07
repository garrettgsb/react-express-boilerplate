import React, { useState, FC, Fragment, useEffect } from 'react'

import { useSprings, useSpring, animated, interpolate } from 'react-spring'
import { useGesture, useScroll } from 'react-use-gesture'
import styled from 'styled-components';
import axios from 'axios';
// import './styles.css'


interface SwipeProps {
  // i?:number
  // useGesture: (e: React.SyntheticEvent) => void,
  // useSprings: (e: React.SyntheticEvent<EventTarget>) => void
};
interface AttractionsObject {
  reasons: string,
  venue: VenueObject,
};

interface VenueObject {
  id: string,
  name: string,
  location: object
}

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
  
  // let result: Array<any>;
  // let result1: Array<any>;
  // let attractions: AObject[];
  // let photos: Array<any>;
  // attractions = [];
  // result = [];
  // result1 = [];

  const [attractions, setAttractitions] = useState<AttractionsObject[]>([]);
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));
  
  useEffect(() => {

    axios.defaults.baseURL = 'http://localhost:8081';
    axios.get(`api/attractions`)
    .then(res => {
      console.log('check res received', res.data)
      setAttractitions(res.data)
      // result.map(data => {
      //   attractions.push({
      //     id: data.venue.id,
      //     name: data.venue.name,
      //   })
      //   // console.log(attractions)
      // });
      // result1 = res.data[1]
      // console.log('attraction >>>',result);
      // console.log('photo >>>', result1)
    });
  },[])
  console.log('list', attractions)
  // Object.keys(attractions).map(data => console.log(data.venue));
  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`
    });
  });

  return (
    <Fragment>
      <Swiping>
        <div className="container" {...bind()}>
          {attractions.map(attraction => (
            <Card>
              {/* <p>{attraction.venue.name}</p> */}
              <animated.div
                key={attraction.venue.name}
                className="card"
                style={{
                  ...style,
                  backgroundImage: ``
                }}
              >{attraction.venue.name}</animated.div>
            </Card>
          ))}
        </div>
      </Swiping>
    </Fragment>
  );
};

