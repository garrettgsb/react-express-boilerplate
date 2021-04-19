import React from 'react';

const UserDetails = ({ userName, userCity, userBio }) =>(
    <div>
      {userName}
      {userCity}
      {userBio}
    </div>
  )

export default UserDetails;