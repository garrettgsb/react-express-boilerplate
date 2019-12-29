import React, {useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { City } from './City';

type PropTypes = { cities: string }

const Cities = styled.ul`
  padding-left: 0px;
`;

const CityItem = styled.li`
  list-style-type: none;
`;

const Title = styled.h1`
  text-align: center;  
`

export const CityList = ({cities}: PropTypes) => {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/trips'))
    ])
    .then((res) => {
      console.log(res)
    })
  })

  return (
    <>
    <Title>My Trips</Title>
    <Cities>
      {/* {cities.map(city => 
        <City name={city.city} />
      )} */}
      <CityItem><City name="Vancouver" img="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg" start="start" end="end"/></CityItem>
      <CityItem><City name="Seattle" img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg" start="start" end="end"/></CityItem>
    </Cities>
    </>
  )
}