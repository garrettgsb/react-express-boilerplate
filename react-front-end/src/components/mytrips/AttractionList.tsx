import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Attraction } from './Attraction';
import { Button } from './Button';
import { InviteIcon } from './InviteIcon';

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

type PropTypes = { id:string, attractions: Array<any>, deleteAttraction: any, setInvite:any }

export const AttractionList = ({id, attractions, deleteAttraction, setInvite}: PropTypes) => {
  
  return (
    <>
    <Header>
      <Title>{attractions.length === 0 ? "Itinerary" : attractions[0].city}</Title>
      <InviteIcon id={id} setInvite={setInvite} />
    </Header>

    <Attractions>
      {attractions.map(attraction =>
        <AttractionItem key={attraction.id}>
          <Attraction id = {attraction.attraction_id} name={attraction.name} img={attraction.photo} editable={true} deleteAttraction={deleteAttraction} />
        </AttractionItem>
        )}
    </Attractions>

    <Button text="Generate" click={() => console.log('click')} />
    </>
  )
}