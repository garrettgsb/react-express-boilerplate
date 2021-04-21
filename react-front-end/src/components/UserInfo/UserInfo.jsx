import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider';

export default function UserInfo() {
  const { user, logout } = useContext(authContext);

  const onLogout = function (event) {
    logout();
  };

  // Show user Info if logged in
  return (
    <div className="flex-column">
      <div className="spacer" ></div>
      <h4>You are logged in <br />
      Email: {user.email} <br />
      Name: {user.name} <br />
      UserId: {user.id}</h4>
      <button 
        value="Logout" 
        className='btn' 
        onClick={onLogout} 
        style = {{width: 300}}> 
        Logout </button>
      {/* <input type="button" value="Logout" onClick={onLogout} /> */}
    </div>
  );
};
