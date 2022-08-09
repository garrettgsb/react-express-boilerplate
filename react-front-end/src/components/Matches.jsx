import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import * as ROUTES from './routes';
import Messages from "./Messages";

export default function Matches(props) {


  const match = props.matches.map(match =>   {
return(
  <div><div>
{match.name}
  </div>
  <div>
<img className="w-12 h-12 rounded-full pointer-events-none object-cover" src={match.photos[0]} />
  </div>
  </div>)

    })




console.log("state from matches", props.matches)
return (
  
<>
{/* <section className="user-card-container w-full h-screen place-content-center p-5"> */}
<div className="flex flex-col mt-8">
<div>
          <p className="mt-4 indent-2 font-semibold">
            You logged in as
            {/* <span className="text-fuschia-800 hover:underline"> {props.user.name}</span> */}
          </p>
        </div>

          <div className="flex flex-row items-center justify-between text-xs">
          <div className="ml-2 text-sm font-semibold">
            MATCHES LIST
{match}
{/* here will be mapped matches in buttons*/}
</div>
          </div>
          </div>
          
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div classNane="relative flex items-center space-x-4">
        here wil be mapped messages
        {/* <Messages /> */}
      </div>
      </div>



{/* 
  <article className="user-profile flex flex-col user-card h-screen overflow-y-scroll" id={props.id}>
<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
   <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div classNane="relative flex items-center space-x-4">
        here wil be mapped messages
      </div>
      </div>
        </div>
        </article>
       */}

        {/* </section> */}



        </>



)


}