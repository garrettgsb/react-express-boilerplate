import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';


const UserForm = (props) => {  
  const[username, setUsername] = useState('');

  const userNameSubmitted = (e) => {
    console.log("submit")
      e.preventDefault();
      if (username === '') {
        return;
      }
      props.createSocket(username);
  }

  return (
    <div id="user-form">
      <form onSubmit = {userNameSubmitted}>
        <input 
          type='text'
          id='username' 
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm