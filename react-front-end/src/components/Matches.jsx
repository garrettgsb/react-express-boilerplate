import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import * as ROUTES from './routes';
import Messages from "./MessagesContainer";

import {
    BellIcon
} from "@heroicons/react/outline";

export default function Matches(props) {

 function seen(input) { 
  if(props.matches && props.messages.filter(a => a.to_user_id === input && a.message_seen === false).length > 0)
  {return true}
  else return false
// return z
} 



// FUNCTION DOES NOT WORK OF PROPS
// console.log("sssss", props.messages)
// console.log('bbbb', props.messages.find(a => a.to_user_id === 1 && a.message_seen === true))


  // console.log("*", seen)
  const match = props.matches.map(match =>   {
    return(
      // const seen = false

  <div key={match.id} href="/users/:id/messages" className={"text-xs font-medium cursor-pointer rounded-xl p-1 align-text-bottom flex gap-4 border border-fuchsia-300 border-spacing-2" + (seen(match.id)? " bg-fuchsia-50 hover:bg-fuchsia-300" : " bg-white hover:bg-gray-100")}>
  <img className="w-10 h-10 cursor-pointer  rounded-full object-cover" src={match.photos[0]} href="/users/:id/messages"/>
  {match.name}
 <br />
 { seen(match.id)? <BellIcon className="mx-1 h-5 cursor-pointer rounded-full text-[#8A00A0] hover:bg-gray-50 " />: <></>}
 
  {/* {props.messages.sort((a,b) => b.date_sent - a.date_sent)} */}

{/* <img className="w-12 h-12 rounded-full pointer-events-none object-cover" src={match.photos[0]} href="/users/:id/messages"/>
{match.name}  */}
{/* <p>unread</p> */}
    </div>
    
  )

    })


//  props.messages.message_seen;


console.log("state from matches", props)

return (
<>
<section className="w-full h-screen place-content-center p-5 ">

<div className="grid grid-cols-5 gap-3 w-2/3 mx-auto rounded-2xl border-spacing-2">
  <div className="rounded-2xl border-cyan-900 indent-2 font-semibold">
  
                {props.user? props.user[0].name : 'Loading'}
               
  </div>
  
  <div className="rounded-2xl col-span-4"></div>
</div>

<div className="grid grid-cols-5 rounded-3xl p-5 gap-3 w-2/3 mx-auto shadow-xl border-double border-2 border-spacing-3 border-fuschia-50">
  <div className="rounded-3xl grid-flow-row space-y-4" >{match? match : "loading"}</div>
  <div className="w-full mx-auto border-2 col-span-4">
    
    
    <p>MESSAGES1</p>
    <p>MESSAGsdd dsd sds sd sdsd ds ds ds ES 2</p>

    </div>

</div>

</section>

</>
)


}