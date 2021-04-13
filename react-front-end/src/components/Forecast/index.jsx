import React from 'react';
import { useState } from 'react';

import '../Button.scss';
import '../../App.scss';
import CloudCover from './CloudCover';
import Kpindex from './Kpindex';
import MoonCycle from './MoonCycle';
// import axios from 'axios';

export default function Forecast() {
  return (
    <div className="container">
      <CloudCover />
      <Kpindex />
      <MoonCycle />
    </div>
  );
}
