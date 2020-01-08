import React, { useState, FC, Fragment, useEffect } from 'react'

import { useSprings, useSpring, animated, interpolate } from 'react-spring'
import { useGesture, useScroll } from 'react-use-gesture'
import styled from 'styled-components';
import axios from 'axios';
import { url } from 'inspector';
// import './styles.css'


interface SwipeProps {
  // i?:number
  // useGesture: (e: React.SyntheticEvent) => void,
  // useSprings: (e: React.SyntheticEvent<EventTarget>) => void
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

// interface VenueObject {
//   id: string,
//   name: string,
//   location: object,
//   photolink: string
// }

const Swiping = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;
`;
const Card =styled.div`
  background-color: red;
  flex-shrink: 5;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin-left: 10px;
  background-size: 100%;
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
      // res.data[0].map(resData => {
      //   resData["photo"] = res.data[1][resData]
      // })
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
  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateX(${
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
                key={attraction.name}
                className="card"
                style={{
                  ...style,
                  backgroundImage: `url(${attraction.photo})`
                }}
              >{attraction.name}</animated.div>
            </Card>
          ))}
        </div>
      </Swiping>
    </Fragment>
  );
};

