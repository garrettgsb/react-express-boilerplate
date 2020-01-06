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

type PropTypes = { number: number}

export const Day = ({number}: PropTypes) => {
  return (
    <ItineraryDay>
      <div>Day</div>
      <DayNum>{number}</DayNum>
    </ItineraryDay>
  )
}