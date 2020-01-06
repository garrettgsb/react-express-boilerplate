import React from 'react';
import { Attraction } from './Attraction';

type PropTypes = { timeslots: Array<any> }

export const ItineraryBody = ({timeslots}: PropTypes) => {

  const categorizeTimeslot = (slot: {attraction_id:number, name:string, photo:string}) => {
    if (slot.attraction_id === null) {
      return <p>This is a travel mode</p>
    } else {
      return <Attraction name={slot.name} img={slot.photo} />
    }
  };

  return (
    <>
    {timeslots.map(slot =>
      categorizeTimeslot(slot)
    )}
    </>
  )
}