import React, { useState } from 'react';
import { IUserFormProps } from '../interfaces/UserFormInterfaces';

const UserForm = (props: IUserFormProps) => {  
  const[username, setUsername] = useState('');

  const userNameSubmitted = (e: React.FormEvent<HTMLFormElement>): void => {
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