import React from 'react';
import Map from './Map'
import Form from './Form'

import 'leaflet/dist/leaflet.css'

export default function Maps() {
  return (
    <div className='flex-row'>
      <Map />
      <Form />
    </div>
  );
}
