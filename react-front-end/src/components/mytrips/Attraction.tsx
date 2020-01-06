import React from 'react';
import styled from 'styled-components';

type PropTypes = { name: string, img: string }

const Name = styled.h2`
  text-align: center;
  color: #fff;
`;

export const Attraction = ({name, img}: PropTypes) => {
  const Container = styled.div`
    padding: 10px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img});
    background-size: 100%;
  `;

  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  )
}

