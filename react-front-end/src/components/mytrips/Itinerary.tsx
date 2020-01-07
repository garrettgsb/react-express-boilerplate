import React, {useState, useEffect} from 'react';
import { ItineraryHeader } from './ItineraryHeader';
import { ItineraryBody } from './ItineraryBody';

type PropTypes = { id: string, timeslots: Array<any> }

export const Itinerary = ({id, timeslots}: PropTypes) => {
  
  return (
    <>
    <ItineraryHeader />
    <ItineraryBody timeslots={timeslots} />
    </>
  )
}