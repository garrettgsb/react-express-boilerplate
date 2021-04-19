import React from 'react';

import Kpindex from './Kpindex';
import Weather from './Weather'
import Info from './Info'

export default function Forecast() {
  return (
    <div className="container">
      <div className="cont">
        <Kpindex />
        <Weather />
      </div>
      <Info />
    </div>
  );
}
