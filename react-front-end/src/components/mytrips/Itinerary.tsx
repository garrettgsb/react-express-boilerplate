import React from 'react';
import { ItineraryHeader } from './ItineraryHeader';

type PropTypes = { id: string, attractions: Array<any> }

export const Itinerary = ({id, attractions}: PropTypes) => {
  return (
    <ItineraryHeader />
  )
}