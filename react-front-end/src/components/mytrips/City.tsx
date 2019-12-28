import React, { FunctionComponent } from 'react';

type CityProps = { name: string, img: string, start: string, end: string }

export const City = ({name, img, start, end}: CityProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{start}</p>
      <p>{end}</p>
    </div>
  )
}

