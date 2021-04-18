import React from 'react';

import '../../styles/components/_button.scss'
import '../../styles/App.scss';
import ProfileSettings from './ProfileSettings';
// import axios from 'axios';

export default function Settings() {
  return (
    <div className="container">
      <ProfileSettings />
    </div>
  );
}