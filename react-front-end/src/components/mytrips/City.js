import React from 'react';

export default function City({name, img, start, end}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{start}</p>
      <p>{end}</p>
    </div>
  )
}