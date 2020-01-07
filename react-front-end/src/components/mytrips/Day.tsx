import React from 'react';
import styled from 'styled-components';

const ItineraryDay = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
`
const DayNum = styled.div`
  background: #586F7C;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  line-height: 25px;
  color: #ffffff;
`

type PropTypes = { number:string, selectDay:any, key:number, id:string }

export const Day = ({number, selectDay}: PropTypes) => {
  return (
    <ItineraryDay onClick={selectDay}>
      <div>Day</div>
      <DayNum>{number}</DayNum>
    </ItineraryDay>
  )
}