import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { City } from './City';
import moment from 'moment';
import axios from 'axios';

type PropTypes = { cities: Array<any>, deletedIds: Array<any> }

const CityItem = styled(Link)`
  text-decoration: none;
  list-style-type: none;
`;

const Title = styled.h1`
  text-align: center;  
`

export const CityList = () => {
  const [trips, setTrips] = useState<Array<any>>([]);
  useEffect(() => {
    axios.get('/api/trips', {params: {user: localStorage.userID}})
    .then((res) => {
      setTrips(res.data)
    })
  }, [])

  return (
    <>
    <Title>My Trips</Title>

    {trips ? trips.map(city =>
      <CityItem key={city.id} to={`/trips/${city.id}`}>
        <City key={city.id} name={city.city} img={city.city_img} start={moment.unix(city.trip_start).format('MMM DD, YYYY')} end={moment.unix(city.trip_end).format('MMM DD, YYYY')} />
      </CityItem>
      ):<div>Loading</div>}
    </>
  )
}