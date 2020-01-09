import React from 'react';
import { Attraction } from './Attraction';
import location from '../../images/location.svg';
import walk from '../../images/walk.svg';
import bus from '../../images/bus.svg';
import styled from 'styled-components';
import moment from 'moment';

const Timeslot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
  align-items: center;
`

const ContentDiv = styled.div`
  width: 75%;
  text-align: center;
`

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
`
const Icon = styled.img`
  width: 30px;
`

const getIcon = (type:string) => {
  if (type === 'attraction') {
    return <Icon src={location} />
  } else if (type === 'walk') {
    return <Icon src={walk} />
  } else if (type === 'bus') {
    return <Icon src={bus} />
  }
}

type PropTypes = { timeslots: Array<any>, deleteAttraction: any }

export const List = ({timeslots, deleteAttraction}: PropTypes) => {
  const categorizeTimeslot = (slot: {id:number, attraction_id:number, name:string, photo:string, travel_mode:string, start_time:number, end_time:number, lat:number, lng:number}) => {
    const start = moment.unix(slot.start_time);
    const end = moment.unix(slot.end_time);

    if (slot.attraction_id === null && slot.travel_mode == 'WALK') {
      return <Timeslot key={slot.id}><IconDiv>{getIcon('walk')}</IconDiv><ContentDiv>{end.diff(start, 'minutes')} MINUTES {slot.travel_mode}</ContentDiv></Timeslot>
    } else if (slot.attraction_id === null && slot.travel_mode == 'BUS') {
      return <Timeslot key={slot.id}><IconDiv>{getIcon('bus')}</IconDiv><ContentDiv>{end.diff(start, 'minutes')} MINUTES {slot.travel_mode}</ContentDiv></Timeslot>
    } else {
      return <Timeslot key={slot.id}><IconDiv>{getIcon('attraction')}{moment.unix(slot.start_time).utc().format('hh:mm a')}</IconDiv><ContentDiv><Attraction key={slot.id} id={slot.id} name={slot.name} img={slot.photo} editable={false} deleteAttraction={deleteAttraction} /></ContentDiv></Timeslot>
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