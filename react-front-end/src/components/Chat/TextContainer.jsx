import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'

const TextContainer = ({ users }) => {
  return (
    <div className="textContainer">
    {
      users
        ? (
          <div>
            <h4>People currently chatting:</h4>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {(name).trim()}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);
 
}

export default TextContainer
