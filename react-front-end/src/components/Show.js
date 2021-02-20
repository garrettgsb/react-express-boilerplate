import React from "react";
import OppositeTimeline from './OppositeTimeline.js'

export default function Show(props){
    return (<div id="show">
              <img src={ props.avatar } alt="nothing"></img>
              <a target="_blank" href={`https://github.com/${props.loginUser}`}>
                <h4>@{props.loginUser}</h4>
              </a>
              <h4>{props.name}'s Timeline</h4>
              <div id="opposite-timeline">
                <OppositeTimeline filterParam={props.filterParam} repositories={props.repositories} avatar={props.avatar}/>
              </div> 
            </div>
    )
  }