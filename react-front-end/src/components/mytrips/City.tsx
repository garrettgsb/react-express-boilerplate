import React, { FunctionComponent } from 'react';

type CityProps = { name: string, img: string, start: timestamp, end: timestamp }

export default function City({name, img, start, end}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{start}</p>
      <p>{end}</p>
    </div>
  )
}