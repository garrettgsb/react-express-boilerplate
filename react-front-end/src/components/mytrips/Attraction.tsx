import React from 'react';
import styled from 'styled-components';

type PropTypes = { name: string, img: string, lat:number, lng:number }

const Name = styled.h2`
  text-align: center;
  color: #fff;
`;

export const Attraction = ({name, img, lat, lng}: PropTypes) => {
  const Container = styled.div`
    padding: 10px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});
    background-size: 100%;
    background-position: center;
  `;

  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  )
}

