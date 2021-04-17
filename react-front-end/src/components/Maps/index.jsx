import React from 'react';
import Map from './Map'
import Mapp from './Mapp'
import MapClass from './MapClass'
import MapClassR from './MapClassR'

import 'leaflet/dist/leaflet.css'
import '../../App.scss';
import '../../index.scss';

export default function Maps() {
  return (
    <div id="mapid">
      {/* <MapClass /> */}
      <br />
      {/* <MapClassR /> */}
      <Map />
      {/* <Mapp /> */}
    </div>
  );
}
