import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

type InviteTypes = {trip:string, goBack:any}
export const Invite = ({trip, goBack}:InviteTypes) => {

  const [email, getEmail] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(null);
  const [users, setUsers] = useState<Array<any>>([]);

  const inviteFriend = (e:any) => {
    e.preventDefault();
    axios.post(`/api/trips/${trip}/invite`, {
      user: email
    })
    .then(() => setSuccess(true))
    .then(() => loadUsers())
    .catch(() => setSuccess(false))
  }

  const loadUsers = () => {
    axios.get(`/api/trips/${trip}/users`)
    .then((res) => setUsers(res.data))
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const inviteMessage = (state:boolean) => {
    if (state === true) {
      return 'User added!'
    } else if (state === false) {
      return 'User is already on this itinerary'
    }
  }

  return (
    <>
    <button onClick={goBack}>Go back</button>

    <Container>
      <h1>Invite</h1>
      {inviteMessage(success)}
      <form onSubmit={inviteFriend}>
        <input type="text" value={email} onChange={(e) => getEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>

      <p>On this trip:</p>
      <ul>
      {users.map(user =>
        <li key={user.user_id}>{user.first_name}</li>
      )}
      </ul>
    </Container>
    </>
  )
}