import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Attraction } from './Attraction';

type PropTypes = { city: string, attractions: string }

const Attractions = styled.ul`
  padding-left: 0px;
`;

const AttractionItem = styled(Link)`
  text-decoration: none;
  list-style-type: none;
`;

const Title = styled.h1`
  text-align: center;  
`

export const AttractionList = ({city, attractions}: PropTypes) => {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/trips/:id'))
    ])
    .then((res) => {
      console.log(res)
    })
  })

  return (
    <>
    <Title>{city}</Title>
    <Attractions>
      {/* {cities.map(city => 
        <City name={city.city} />
      )} */}
      <AttractionItem to='/vancouver'><Attraction name="Coal Harbour" img="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg" /></AttractionItem>
      <AttractionItem to='/seattle'><Attraction name="Stanley Park" img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg" /></AttractionItem>
    </Attractions>
    </>
  )
}