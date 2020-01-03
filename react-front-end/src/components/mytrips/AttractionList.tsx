import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Attraction } from './Attraction';
import add from '../../images/add-contact.svg';
import { Button } from './Button';

const Attractions = styled.ul`
  padding-left: 0px;
`;

const AttractionItem = styled.li`
  text-decoration: none;
  list-style-type: none;
`;

const Title = styled.h1`
  text-align: left;
`;

const Add = styled.img`
  width: 40px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10%;
  padding-left: 10%;
`;


export const AttractionList = () => {
  const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
  const [attractions, setAttractions] = useState<Array<any>>([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/trips/${id}`)
    ])
    .then((res) => {
      setAttractions(res[0].data);
    })
  }, [])

  console.log(attractions)
  return (
    <>
    <Header>
      <Title>City</Title>
      <Add src={add} />
    </Header>

    <Attractions>
      {attractions.map(attraction =>
        <AttractionItem>
          <Attraction name={attraction.name} img={attraction.city_img} />
        </AttractionItem>
        )}
    </Attractions>

    <Button text="Generate" />
    </>
  )
}