import React, {useState} from 'react';
import { Map } from './Map';
import { List } from './List';
import { Button } from './Button';

type PropTypes = { timeslots: Array<any> }

export const ItineraryBody = ({timeslots}: PropTypes) => {

  const [view, setView] = useState<string>('list');

  return (
    <>
    {view === 'list' && <List timeslots={timeslots} />}
    {view === 'map' && <Map places={timeslots} />}
    
    {view === 'list' ? <Button text="map" click={() => setView('map')} /> : <Button text="list" click={() => setView('list')} />}

    </>
  )
}