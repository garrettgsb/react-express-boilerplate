import React from 'react';
import Map from './Map'
import Mapp from './Mapp'

import 'leaflet/dist/leaflet.css'

export default function Maps() {
  return (
    <div id="mapid">
      <Map />
      <Mapp />
    </div>
  );
}
