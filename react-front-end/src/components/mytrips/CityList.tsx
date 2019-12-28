import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { City } from './City';

type CityListProps = { city: string }

const Cities = styled.ul`
  padding-left: 0px;
`;

const CityItem = styled.li`
  list-style-type: none;
`;

export const CityList = ({city}: CityListProps) => {
  return (
    <Cities>
      {/* {cities.map(city => 
        <City name={city.city} />
      )} */}
      <CityItem><City name="Vancouver" img="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg" start="start" end="end"/></CityItem>
      <CityItem><City name="Seattle" img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg" start="start" end="end"/></CityItem>
    </Cities>
  )
}