import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  width: 100%;
`

export const ItineraryHeader = () => {
  return (
    <Header>
      <p>1</p>
      <p>2</p>

      <p>3</p>

    </Header>
  )
}