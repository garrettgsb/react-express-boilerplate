import React, { useState } from 'react';

const UserForm = (props) => {  
  const[username, setUsername] = useState('');

  const userNameSubmitted = (e) => {
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