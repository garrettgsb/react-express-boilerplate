import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      return 'Thanks for inviting!'
    } else if (state === false) {
      return 'User is already on this itinerary'
    }
  }

  return (
    <>
    <button onClick={goBack}>Go back</button>
    {inviteMessage(success)}
    {users.map(user =>
      <p>{user.first_name}</p>
      )}
    <div>
      <h1>Invite</h1>
      <form onSubmit={inviteFriend}>
        <input type="text" value={email} onChange={(e) => getEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}