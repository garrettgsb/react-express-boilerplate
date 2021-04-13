import React from 'react';
import { useState } from 'react';

import '../Button.scss';
import '../../App.scss';
import ProfileSettings from './ProfileSettings';
// import axios from 'axios';

export default function Settings() {
  return (
    <div className="container">
      <ProfileSettings />
    </div>
  );
}