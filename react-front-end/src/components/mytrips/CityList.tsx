import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { City } from './City';
import moment from 'moment';

type PropTypes = { cities: Array<any> }

const Cities = styled.ul`
  padding-left: 0px;
`;

const CityItem = styled(Link)`
  text-decoration: none;
  list-style-type: none;
`;

const Title = styled.h1`
  text-align: center;  
`

export const CityList = ({cities}: PropTypes) => {

  return (
    <>
    <Title>My Trips</Title>
    <Cities>
      {cities.map(city =>
        <CityItem to="/trips/vancouver">
          <City name={city.city} img={city.city_img} start={moment(city.start_time).format('MMM DD, YYYY')} end={moment(city.end_time).format('MMM DD, YYYY')} />
        </CityItem>
        )}
    </Cities>
    </>
  )
}