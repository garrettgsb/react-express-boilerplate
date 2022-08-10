import React from "react";
import Conversation from "./Conversation";

import {useState} from 'react';

export default function Matches(props) {
  const [selected, setSelected] = useState(null);

  // Click handler to set current view/chat 
  const selectHandler = (matchObj) => {
    setSelected(matchObj);
  };

  return (
    <div className='outer-most-matches-div grid'>
      <Conversation selected={selected} user={props.state.user} messages={props.state.messages}/>
      <div className="bg-white test-list flex flex-col border border-gray-300">
        placeholder click to select view
        {props.matches?.map((match, index) => {
          return (
            <button key={index} className='border border-black w-1/2' onClick={() => selectHandler(match)}>
              <div>{match.name}</div>
              <div>id: {match.id}</div>
              <div>photoid: {match.photos[0].id}</div>
              <div>photoid: {match.photos[1].id}</div>
            </button>
          )
        })}
      </div>
    </div>
  );
};