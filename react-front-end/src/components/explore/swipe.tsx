import React, { useState, FC, Fragment, useEffect, useCallback } from 'react';

import { useSprings, useSpring, useTransition, animated, interpolate, SpringValue } from 'react-spring';
import { useGesture, useScroll } from 'react-use-gesture';
import Slider from 'react-animated-slider';
import axios from 'axios';

import { 
  Container,
  SliderContent,
  Inner,
  Name,
  Button,
  Description
} from "./swipe.component";

import "react-animated-slider/build/horizontal.css";


interface SwipeProps {
  // style?: React.CSSProperties | undefined
  handleSubmit?: (e: AttractionsObject) => void,
  itinerariesId: number
  
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

export const Swipe: FC<SwipeProps> = ({handleSubmit, itinerariesId}) => {
  const [attractions, setAttractions] = useState<Array<AttractionsObject>>([]);
  let value: string | null;
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:8081';
    axios.get(`/api/itineraries/${itinerariesId}`, {
      params : {
        itinerariesId
      }
    })
    .then(res => {
      console.log('check res received', res.data)
      setAttractions(res.data)
    })
    .catch((err) => console.log(err));
  },[])

  //helper functions
  //to shuffle all attractions in a random way

  function shuffleAttractions(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const attractionsShuffle = shuffleAttractions(attractions)
  
  //submit the attractions to database
  handleSubmit = (item: AttractionsObject ) => {
    console.log('check');
    axios.defaults.baseURL = 'http://localhost:8081';
    axios(`/api/itineraries/${itinerariesId}`, {
      method: "post",
      data: {
        attraction: item,
      },
      withCredentials: true
    })
    .then(() => {
      // history.push(`/explore/:${search.query}`);
    })
  };

  return (
    <Container>
      <Slider className="slider-wrapper">
          {attractionsShuffle.map((item, index) => (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(item)
            }
            }>
              <SliderContent
                key={index}
                className="slider-content"
                style={{ background: `url('${item.photo}') no-repeat center center` }}
              >
                <Inner className="inner">
                  <Name>{item.name}</Name>
                  <Description>{item.location}</Description>
                  <Button type="submit" value={item}>Select</Button>
                </Inner>
              </SliderContent>
            </form>
          ))}
    </Slider>
    </Container>
  );
};