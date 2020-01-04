import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import { AttractionList } from './AttractionList';

export const Trip = () => {
  const id:string = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
  const [attractions, setAttractions] = useState<Array<any>>([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/trips/${id}`)
    ])
    .then((res) => {
      setAttractions(res[0].data);
    })
  }, [])

  return(
    <AttractionList attractions={attractions} />
  )
}