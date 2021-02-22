import React from "react";
import { useState } from "react";
import "./RepoDisplay.scss";
import RepoSummary from "./RepoSummary";
import RepoLanguage from "./RepoLanguage";
import axios from "axios";
import RepoContributors from "./RepoContributors"

export default function RepoDisplay(props) {
  const [state, setState] = useState({
    show: "summary",
    languageData: "",
    contributorData:""
  });
  const showLanguages = (url) => {
    axios.get(url).then((response) => {
      setState((prev) => ({
        ...prev,
        show: "language",
        languageData: response.data,
      }));
    });
  };

  const showContributors=(url)=>{
    axios.get(url).then((response) => {
      console.log(response.data);
      setState((prev) => ({
        ...prev,
        show: "contributor",
        contributorData: response.data,
      }));
    });
    console.log(url)
  }
  const back=()=>{
    setState(prev=>({
      ...prev,
      show: "summary"
    }))
  }

  return (
    <div>
      {state.show === "summary" && (
        <RepoSummary {...props} showContributors={showContributors} showLanguages={showLanguages} />
      )}
      {state.show === "language" && (
        <RepoLanguage languageData={state.languageData} back={back}/>
      )}
      {state.show === "contributor" && (
        <RepoContributors data = {state.contributorData} back={back}/>
      )}
    </div>
  );
}
