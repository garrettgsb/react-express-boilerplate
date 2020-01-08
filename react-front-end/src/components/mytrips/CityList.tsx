import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { City } from './City';
import moment from 'moment';

type PropTypes = { cities: Array<any> }

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
    {cities.map(city =>
      <CityItem key={city.id} to={`/trips/${city.id}`}>
        <City key={city.id} name={city.city} img={city.city_img} start={moment.unix(city.trip_start).utc().format('MMM DD, YYYY')} end={moment.unix(city.trip_end).utc().format('MMM DD, YYYY')} />
      </CityItem>
      )}
    </>
  )
}