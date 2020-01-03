import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Attraction } from './Attraction';
import add from '../../images/add-contact.svg';
import { Button } from './Button';

const Attractions = styled.ul`
  padding-left: 0px;
`;

const AttractionItem = styled(Link)`
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

  useEffect(() => {
    Promise.all([
      axios.get('/api/trips/1')
    ])
    .then((res) => {
      console.log(res)
    })
  })

  return (
    <>
    <Header>
      <Title>City</Title>
      <Add src={add} />
    </Header>

    <Attractions>
      <AttractionItem to='/vancouver'><Attraction name="Coal Harbour" img="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg" /></AttractionItem>
      <AttractionItem to='/seattle'><Attraction name="Stanley Park" img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg" /></AttractionItem>
    </Attractions>

    <Button text="Generate" />
    </>
  )
}