import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
  padding: 25px;
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

type PropTypes = { attractions: Array<any> }

export const AttractionList = ({attractions}: PropTypes) => {

  return (
    <>
    <Header>
      <Title>{attractions.length === 0 ? "Itinerary" : attractions[0].city}</Title>
      <Add src={add} />
    </Header>

    <Attractions>
      {attractions.map(attraction =>
        <AttractionItem key={attraction.id}>
          <Attraction name={attraction.name} img={attraction.photo} />
        </AttractionItem>
        )}
    </Attractions>

    <Button text="Generate" />
    </>
  )
}