import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Map from './Map'
import Form from './Form'

import 'leaflet/dist/leaflet.css'
const url = 'http://localhost:8080/maps'

export default function Maps() {

  const [photoSpots, setPhotoSpots] = useState([])

  useEffect(() => {
    axios.get(url)
    .then(res => {
      // console.log("test", res.data);
      setPhotoSpots(res.data);
    })
  }, []);

  return (
    <div className='flex-row'>
      <Map markers={photoSpots} />
      <Form setPhotoSpots={setPhotoSpots}/>
    </div>
  );
}


// ✔ pass setPS to form
// ✔ call setPS upon form submission setPhotospot(newState)
//duplicate existing state before clear