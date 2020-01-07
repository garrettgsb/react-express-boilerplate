import React from 'react';
import styled from 'styled-components';

const ItineraryDay = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
`

type PropTypes = { number:string, selectDay:any, key:number, id:string, selected:string }

export const Day = ({number, selectDay, selected}: PropTypes) => {
  const DayNum = styled.div`
    background: ${selected === number ? '#586F7C' : '#FFF'}
    border-radius: 50%;
    height: 25px;
    width: 25px;
    line-height: 25px;
    color: ${selected === number ? '#FFF' : 'inherit'};
  `
  return (
    <ItineraryDay onClick={selectDay}>
      <div>Day</div>
      <DayNum>{number}</DayNum>
    </ItineraryDay>
  )
}