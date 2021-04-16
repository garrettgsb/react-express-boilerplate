import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
import ChatJoin from '../Meetups/ChatJoin'
=======
>>>>>>> master

import '../Button.scss';
import '../../App.scss';
import ProfilePic from './ProfilePic';
// import axios from 'axios';

export default function Profile() {
  return (
    <div className="container">
      <ProfilePic />
      <ChatJoin />
    </div>
  );
}