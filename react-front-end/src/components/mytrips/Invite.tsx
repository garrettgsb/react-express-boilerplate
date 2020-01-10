import React, { useState } from 'react';
import axios from 'axios';

export const Invite = () => {
  const tripId:string = location.pathname.slice((location.pathname.lastIndexOf('/') - 1), -7);
  const [email, getEmail] = useState<string>('');

  const inviteFriend = () => {
    axios.post(`/api/trips/${tripId}/invite`, {
      user: email
    })
    .then((res) => console.log(res.data))
  }


  return (
    <div>
      <h1>Invite</h1>
      <form>
        <input type="text" value={email} onChange={(e) => getEmail(e.target.value)} placeholder="Email" />
        <button onClick={inviteFriend}>Submit</button>
      </form>
    </div>
  )
}