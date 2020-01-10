import React from 'react';

export const Invite = () => {
  const tripId:string = location.pathname.slice((location.pathname.lastIndexOf('/') - 1), -7);

  return (
    <p>Invite to {tripId}</p>
  )
}