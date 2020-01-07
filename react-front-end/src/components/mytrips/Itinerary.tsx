import React, {useState, useEffect} from 'react';
import { ItineraryHeader } from './ItineraryHeader';
import { ItineraryBody } from './ItineraryBody';
import moment from 'moment';

// calculate number of days for the trip
const getDays = (start:number, end:number) => {
  return Math.round((end - start)/86400)
};

type PropTypes = { id: string, timeslots: Array<{trip_start:number, trip_end:number}> }

export const Itinerary = ({id, timeslots}: PropTypes) => {
  
  useEffect(() => {
    if (timeslots.length > 0) {
      console.log('length', getDays(timeslots[0].trip_start, timeslots[0].trip_end))
    }
  })

  return (
    <>
    <ItineraryHeader length={length} />
    <ItineraryBody timeslots={timeslots} />
    </>
  )
}