import React, { FunctionComponent } from 'react';
import { City } from './City';

type CityListProps = { city: string }
export const CityList = ({city}: CityListProps) => {
  return (
    <ul>
      {/* {cities.map(city => 
        <City name={city.city} />
      )} */}
      <City name="Vancouver" img="test.png" start="test1" end="test2"/>
    </ul>
  )
}