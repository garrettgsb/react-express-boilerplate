import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import * as ROUTES from './routes';
import Messages from "./MessagesContainer";

export default function Matches(props) {


  const match = props.matches.map(match =>   {
return(
  <div key={match.id}>
    {/* match.id */}
  
<img className="w-12 h-12 rounded-full pointer-events-none object-cover" src={match.photos[0]} href="/users/:id/messages"/>
{match.name} 
  
  </div>)

    })




console.log("state from matches", props)
return (
<>

<div class="grid grid-cols-5 gap-3 w-3/5 mx-auto rounded-2xl border border-spacing-2 border-cyan-900">
  <div class="bg-blue-100 rounded-3xl">
  <p className="mt-4 indent-2 font-semibold">
                {props.user? props.user[0].name : 'Loading'}
               </p>
  </div>
  
  <div class="bg-red-100 col-span-4">MATCHES NAME</div>
</div>

<div class="grid grid-cols-5 gap-3 w-3/5 mx-auto">
  <div class="bg-blue-100 rounded-3xl border border-fuchsia-800">{match}</div>
  <div class="bg-red-100 col-span-4">MESSAGES</div>
</div>



</>
)


}