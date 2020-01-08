import React from 'react';
import styled from 'styled-components';

type PropTypes = { text: string, click:any }

const Btn = styled.div`
  background: #ffc0cb;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  text-align: center;
  line-height: 80px;
  z-index: 999;
  position: fixed;
  bottom: 70px;
  right: 20px;
`;

export const Button = ({text, click}: PropTypes) => {

  return (
    <Btn onClick={click}>
      {text}
    </Btn>
  )
}

