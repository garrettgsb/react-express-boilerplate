import React from 'react';
import Map from './Map'

import 'leaflet/dist/leaflet.css'
import '../../App.scss';
import '../../index.scss';

export default function Maps() {
  return (
    <div id="mapid">
      <Map />
    </div>
  );
}
