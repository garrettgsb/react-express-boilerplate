import React from "react";
import {useState} from "react"
import "./RepoDisplay.css";
import RepoSummary from "./RepoSummary"
import RepoLanguage from "./RepoLanguage"
import axios from 'axios';
export default function RepoDisplay(props) {
  const [state, setState] = useState({
    show:"summary",
    languageData:""
  })
  const showLanguages = (url) => {
    axios.get(url)
    .then((response) =>{
      console.log(response.data)
      setState(prev=> ({...prev,show:"language",languageData:response.data}))
    })
    
  }
  

  return (
    <div>
      {state.show === "summary" && <RepoSummary {...props} showLanguages={showLanguages}  />}
      {state.show === "language" && <RepoLanguage languageData={state.languageData} />}
    </div>
  );
}
