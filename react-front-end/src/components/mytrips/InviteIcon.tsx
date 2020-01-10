import React, { useState } from 'react';
import styled from 'styled-components';
import add from '../../images/add-contact.svg';

const ActionIcon = styled.img`
  width: 40px;
  margin-right: 5px;
  margin-left: 5px;
`
type PropTypes = {id:string, setInvite:any}
export const InviteIcon = ({id, setInvite}:PropTypes) => {

  return (
    <ActionIcon src= {add} onClick={setInvite} />
  )
}