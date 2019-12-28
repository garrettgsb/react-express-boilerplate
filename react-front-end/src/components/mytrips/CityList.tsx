import React, { FunctionComponent } from 'react';
import { City } from './City';

type CityListProps = { city: string }

export const CityList = ({city}: CityListProps) => {
  return (
    <ul>
      {/* {cities.map(city => 
        <City name={city.city} />
      )} */}
      <City name="Vancouver" img="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg" start="start" end="end"/>
      <City name="Seattle" img="test.png" start="start" end="end"/>
    </ul>
  )
}