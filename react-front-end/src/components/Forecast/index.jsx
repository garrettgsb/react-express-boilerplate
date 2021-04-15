import React from 'react';
import { useState } from 'react';

import '../Button.scss';
import '../../App.scss';
import CloudCover from './CloudCover';
import Kpindex from './Kpindex';
import MoonCycle from './MoonCycle';
import Clock from "./Clock";

// import axios from 'axios';

export default function Forecast() {
  return (
    <div className="container">
      <Kpindex />
      <Clock />
      <CloudCover />
      <MoonCycle />
    </div>
  );
}
