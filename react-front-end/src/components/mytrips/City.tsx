import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type CityProps = { key: number, name: string, img: string, start: string, end: string }

const Name = styled.h2`
  text-align: center;
  color: #fff;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #fff;
`;

export const City = ({name, img, start, end}: CityProps) => {
  const Container = styled.div`
    padding: 10px 10px 0px 10px;
    margin: 25px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img});
    background-size: 100%;
  `;

  return (
    <Container>
      <Name>{name}</Name>
      <Date>
        <p>{start}</p>
        <p>{end}</p>
      </Date>
    </Container>
  )
}

