import React from 'react';
import axios from 'axios';

axios.get('http://localhost:8080/profile/2', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(data => console.log('data from client:', data))


const ProfilePic = () => {
  return (
    <h1>This is my sweet profile!</h1>

  )
}
export default ProfilePic;