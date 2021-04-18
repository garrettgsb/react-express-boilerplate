import React from 'react';

import CloudCover from './CloudCover';
import Kpindex from './Kpindex';
import MoonCycle from './MoonCycle';

export default function Forecast() {
  return (
    <div className="container">
      <Kpindex />
      <CloudCover />
      <MoonCycle />
    </div>
  );
}
