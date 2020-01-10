import React, { useState } from 'react';
import axios from 'axios';

type InviteTypes = {trip:string}
export const Invite = ({trip}:InviteTypes) => {

  const [email, getEmail] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const inviteFriend = (e:any) => {
    e.preventDefault();
    axios.post(`/api/trips/${trip}/invite`, {
      user: email
    })
    .then(() => setSuccess(true))
  }

  return (
    <>
    {success && 'Thanks for inviting!'}
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