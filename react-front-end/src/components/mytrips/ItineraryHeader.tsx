import React from 'react';
import styled from 'styled-components';
import edit from '../../images/edit.png';
import {Day} from './Day';
import { InviteIcon } from './InviteIcon';

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

const ActionIcon = styled.img`
  width: 40px;
  margin-right: 5px;
  margin-left: 5px;
`

type PropTypes = { editAction: any, length: Array<string>, selected:string, onClick:any }

export const ItineraryHeader = ({editAction, length, onClick, selected}: PropTypes) => {
  const id:string = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  return (
    <Header>
      <Days>
        {length.map(num =>
          <Day key={Number(num)} id={num} number={num} selectDay={() => onClick(num)} selected={selected} />
        )}
      </Days>

      <div>
        <InviteIcon id={id} />
        <ActionIcon src={edit} onClick={editAction} />
      </div>

    </Header>
  )
}