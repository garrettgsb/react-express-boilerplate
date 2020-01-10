import React, { useState } from 'react';
import styled from 'styled-components';
import add from '../../images/add-contact.svg';
import {Redirect} from 'react-router-dom';

const ActionIcon = styled.img`
  width: 40px;
  margin-right: 5px;
  margin-left: 5px;
`
type PropTypes = {id:string}
export const InviteIcon = ({id}:PropTypes) => {
  const [invite, setInvite] = useState<boolean>(false);

  return (
    <>
    {invite && <Redirect to={`/trips/${id}/invite`} />}
    <ActionIcon src= {add} onClick={() => setInvite(true)} />
    </>
  )
}