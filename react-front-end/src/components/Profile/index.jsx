import React from 'react';

import '../../styles/components/_button.scss'
import '../../styles/App.scss';
import ProfilePic from './ProfilePic';
// import axios from 'axios';

export default function Profile() {
  return (
    <div className="container">
      <ProfilePic />
    </div>
  );
}