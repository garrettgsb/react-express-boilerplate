import React from 'react';

type PropTypes = {name:string, lat:number, lng:number}

export const Marker = ({name, lat, lng}: PropTypes) => {
  return (
    <p>{name}</p>
  )
}