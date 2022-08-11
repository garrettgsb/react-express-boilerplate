import React from "react";
import Conversation from "./Conversation";
import MatchesListHeader from './MatchesListHeader';
import MatchBubble from './MatchBubble';

import {useState} from 'react';
// state={state} matches={matches} allMessages={allMessages} setAllMessages={setAllMessages}
export default function Matches(props) {
  const [selected, setSelected] = useState(null);

  // Click handler to set current view/chat 
  const selectHandler = (matchObj) => {
    setSelected(matchObj);
  };

  // map over list of confirmed matches and display bubbles
  const match = props.matches?.map(match => {
    return (
      <MatchBubble 
        key={match.id}
        match={match}
        matchName={match.name}
        allMessages={props.allMessages}
        photos={match.photos}
        userId={props.user}
        selectHandler={selectHandler}
        messageSent={props.messageSent}
        setMessageSent={props.setMessageSent}
        selected={props.selected}
      />
    );
  });

  return (
    <div className='outer-most-matches-div grid'>
      <Conversation selected={selected} user={props.state.user} allMessages={props.allMessages} setAllMessages={props.setAllMessages} messageSent={props.messageSent} setMessageSent={props.setMessageSent}/>
      <MatchesListHeader user={props.state.user} />
      <div className="bg-white matches-bubble-list flex flex-col border-l border-t border-b border-gray-300 py-1">
        {match? match : "loading"}
      </div>
    </div>
  );
};
