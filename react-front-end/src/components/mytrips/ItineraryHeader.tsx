import React from 'react';
import styled from 'styled-components';
import add from '../../images/add-contact.svg';
import edit from '../../images/edit.png';
import {Day} from './Day';

const Days = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  padding: 10px;
  margin: 0px;
`

const Action = styled.img`
  width: 40px;
  margin-right: 5px;
  margin-left: 5px;
`

export const ItineraryHeader = () => {
  return (
    <Header>
      <Days>
        <Day number={1} />
        <Day number={2} />
        <Day number={3} />
      </Days>

      <div>
        <Action src={add} />
        <Action src={edit} />
      </div>

    </Header>
  )
}