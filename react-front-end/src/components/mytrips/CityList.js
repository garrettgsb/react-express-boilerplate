import React from 'react';
import City from './City';

export default function CityList({cities}) {
  return (
    <ul>
      {cities.map(city => 
        <City name={city.city} />
      )}
    </ul>
  )
}