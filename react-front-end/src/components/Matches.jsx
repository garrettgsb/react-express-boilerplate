import React from "react";
import Conversation from "./Conversation";
import MatchBubble from './MatchBubble';
import {
    BellIcon
} from "@heroicons/react/outline";

import {useState} from 'react';
// state={state} matches={matches} allMessages={allMessages} setAllMessages={setAllMessages}
export default function Matches(props) {
  const [selected, setSelected] = useState(null);

  // Click handler to set current view/chat 
  const selectHandler = (matchObj) => {
    console.log('selected', matchObj);
    setSelected(matchObj);
  };

  // function seen(input) { 
  //   if(props.matches && props.messages.filter(a => a.to_user_id === input && a.message_seen === false).length > 0)
  //   {return true}
  //   else return false
  // } 
  //+ (seen(match.id)? " bg-fuchsia-50 hover:bg-fuchsia-300" : " bg-white hover:bg-gray-100")

  // map over list of confirmed matches and display bubbles
  const match = props.matches?.map(match => {
    return (
      <MatchBubble 
        key={match.id}
        match={match}
        matchId={match.id}
        matchName={match.name}
        allMessages={props.allMessages}
        photos={match.photos}
        userId={props.state.user}
        selected={selected}
        selectHandler={selectHandler}
      />
    );
  });

  return (
    <div className='outer-most-matches-div grid'>
      <Conversation selected={selected} user={props.state.user} allMessages={props.allMessages} setAllMessages={props.setAllMessages} messageSent={props.messageSent} setMessageSent={props.setMessageSent}/>
      <div className="bg-white test-list flex flex-col border border-gray-300 py-3">
          {match? match : "loading"}
      </div>
    </div>
  );
};





// return (
// <>
// <section className="w-full place-content-center p-5 ">


// <div className="grid grid-cols-5 rounded-3xl p-5 gap-3 w-2/3 mx-auto shadow-xl border-double border-2 border-spacing-3 border-fuschia-50">
//   <div className="rounded-3xl grid-flow-row space-y-4" >{match? match : "loading"}</div>

// </div>

// </section>

// </>
// )
