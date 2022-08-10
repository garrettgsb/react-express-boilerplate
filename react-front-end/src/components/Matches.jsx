import React from "react";
import Conversation from "./Conversation";
import {
    BellIcon
} from "@heroicons/react/outline";

import {useState} from 'react';
// state={state} matches={matches} allMessages={allMessages} setAllMessages={setAllMessages}
export default function Matches(props) {
  const [selected, setSelected] = useState(null);

  // Click handler to set current view/chat 
  const selectHandler = (matchObj) => {
    setSelected(matchObj);
  };

  function seen(input) { 
    if(props.matches && props.messages.filter(a => a.to_user_id === input && a.message_seen === false).length > 0)
    {return true}
    else return false
  } 
  //+ (seen(match.id)? " bg-fuchsia-50 hover:bg-fuchsia-300" : " bg-white hover:bg-gray-100")
  // map over list of confirmed matches and display bubbles
  const match = props.matches?.map(match => {
    return (
      <div key={match.id} href="/users/:id/messages" className={"text-xs font-medium cursor-pointer rounded-xl p-1 align-text-bottom flex gap-4 border border-fuchsia-300 border-spacing-2" }>
        <img alt='' className="w-10 h-10 cursor-pointer  rounded-full object-cover" src={match.photos? match.photos[0].url: ""} />
          {match.name}
          <br />
          {/* { seen(match.id)? <BellIcon className="h-5 relative cursor-pointer rounded-full text-[#8A00A0] hover:bg-gray-50 " />: <></>} */}
          {/* {props.messages.sort((a,b) => b.date_sent - a.date_sent)} */}
      </div>
    )
  })

  return (
    <div className='outer-most-matches-div grid'>
      <Conversation selected={selected} user={props.state.user} allMessages={props.allMessages} setAllMessages={props.setAllMessages} messageSent={props.messageSent} setMessageSent={props.setMessageSent}/>
      <div className="bg-white test-list flex flex-col border border-gray-300">
        <div className="grid grid-cols-5 rounded-3xl p-5 gap-3 w-2/3 mx-auto shadow-xl border-double border-2 border-spacing-3 border-fuschia-50">
          {match? match : "loading"}
        </div>
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
