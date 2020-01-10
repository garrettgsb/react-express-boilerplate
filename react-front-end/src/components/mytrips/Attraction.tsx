import React from 'react';
import styled from 'styled-components';

type PropTypes = { id: number, name: string, img: string, editable: boolean, deleteAttraction: any }

const Name = styled.h2`
  text-align: center;
  color: #fff;
`;

const DeleteButton = styled.button`
  background: #fff;
`

export const Attraction = ({id, name, img, editable, deleteAttraction}: PropTypes) => {
  const Container = styled.div`
    padding: 10px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});
    background-size: 100%;
    background-position: center;
  `;

  return (
    <Container>
      <Name>{name}</Name>
      {editable && <DeleteButton onClick={() => deleteAttraction(id)}>Remove</DeleteButton>}
    </Container>
  )
}

