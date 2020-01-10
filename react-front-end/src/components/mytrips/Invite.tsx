import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export const Invite = () => {
  const tripId:string = location.pathname.slice((location.pathname.lastIndexOf('/') - 1), -7);
  const [email, getEmail] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  const inviteFriend = (e:any) => {
    e.preventDefault();
    axios.post(`/api/trips/${tripId}/invite`, {
      user: email
    })
    .then(() => setRedirect(true))
  }


  return (
    <>
    {redirect && <Redirect to={`/trips/${tripId}`} />}
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