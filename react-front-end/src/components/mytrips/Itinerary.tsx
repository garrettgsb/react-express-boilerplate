import React, {useState, useEffect} from 'react';
import { ItineraryHeader } from './ItineraryHeader';
import { ItineraryBody } from './ItineraryBody';
import moment from 'moment';

type ItineraryTypes = { editAction: any, id: string, timeslots: Array<{start_time:number, trip_start:number, trip_end:number}>, deleteAttraction: any }

export const Itinerary = ({id, timeslots, editAction, deleteAttraction}: ItineraryTypes) => {

  const [selectedDay, setSelectedDay] = useState<string>('1');

  let schedule:any = {};
  
  const getSchedule = (sched:any, slots:Array<{start_time:number}>) => {
    for (let i = 0; i < slots.length; i++) {
      let date = moment.unix(slots[i].start_time).utc().format('MM-DD');
      if (sched[date]) {
        sched[date].push(slots[i])
      } else {
        sched[date] = [slots[i]]
      }
    }

    let counter = 1;
    for (let day in sched) {
      sched[counter] = sched[day];
      delete sched[day];
      counter += 1;
    }
  }
  
  getSchedule(schedule, timeslots)
  
  return (
    <>
    {Object.keys(schedule).length > 0 && <ItineraryHeader editAction={editAction} length={Object.keys(schedule)} onClick={setSelectedDay} selected={selectedDay} />}
    {Object.keys(schedule).length > 0 && <ItineraryBody timeslots={schedule[selectedDay]} deleteAttraction={deleteAttraction} />}
    </>
  )
}