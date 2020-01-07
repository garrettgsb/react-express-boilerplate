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

type PropTypes = { length: Array<string>, selected:string, onClick:any }

export const ItineraryHeader = ({length, onClick, selected}: PropTypes) => {
  return (
    <Header>
      <Days>
        {length.map(num =>
          <Day key={Number(num)} id={num} number={num} selectDay={() => onClick(num)} selected={selected} />
        )}
      </Days>

      <div>
        <Action src={add} />
        <Action src={edit} />
      </div>

    </Header>
  )
}