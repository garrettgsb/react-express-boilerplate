import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { AttractionList } from './AttractionList';
import { Itinerary } from './Itinerary';

export const Trip = () => {
  const id:string = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
  const [timeslots, setTimeslots] = useState<Array<any>>([]);

  const checkItineraryExists = (attr:Array<any>) => {
    for (let i = 0; i < attr.length; i++) {
      if (attr[i].start_time === null || attr[i].end_time === null) {
        return <AttractionList attractions={timeslots} deleteAttraction={deleteAttraction} />;
      }
    }
    return <Itinerary id={id} timeslots={timeslots} editAction={editAction} deleteAttraction={deleteAttraction} />;
  };

  const deleteAttraction = (id:number) => {
    console.log(id);
  }

  const loadData = () => {
    axios.get(`/api/trips/${id}`)
    .then((res) => {
      setTimeslots(res.data);
    })
  }

  const editAction = () => {
    axios.post(`/api/trips/${id}/edit`)
    .then(() => loadData())
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>{checkItineraryExists(timeslots)}</>
  )
}