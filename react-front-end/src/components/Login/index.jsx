import React from 'react';
import { useState } from 'react';

import '../Button.scss';
import '../../App.scss';
import LoginUser from './LoginUser';
// import axios from 'axios';

export default function Login() {
  return (
    <div className="container">
      <LoginUser />
    </div>
  );
}