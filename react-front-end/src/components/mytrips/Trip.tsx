import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import { AttractionList } from './AttractionList';

export const Trip = () => {
  const id:string = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
  const [attractions, setAttractions] = useState<Array<any>>([]);

  const checkItineraryExists = (attr:Array<any>) => {
    for (let i = 0; i < attr.length; i++) {
      if (attr[i].start_time === null || attr[i].end_time === null) {
        return <AttractionList attractions={attractions} />;
      }
    }
    return <Itinerary id={id} />;
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/api/trips/${id}`)
    ])
    .then((res) => {
      setAttractions(res[0].data);
    })
  }, [])

  return (
    <div>{checkItineraryExists(attractions)}</div>
  )
}