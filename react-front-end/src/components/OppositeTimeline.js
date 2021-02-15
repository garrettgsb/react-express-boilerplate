import React from "react";
import useApplicationData from "../useApplicationData";
import RepoDisplay from "./RepoDisplay.js";
import "./OppositeTimeline.css";

import {useState} from "react"
import "./RepoDisplay.css";
import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function OppositeTimeline(props) {
  const [state,setState] = useState({color:"black"})
  const like = () =>{
    state.color ==="red" ? setState(prev=>({color:"black"})) : setState(prev=>({color:"red"}))
  }


  const repositoryArray = props.repositories;
  const repositoriesObject = repositoryArray.map((repository) => {
    const monthConversion = () => {
      if (repository["created_at"].split("T")[0].split("-")[1] === "01") {
        return "January";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "02"
      ) {
        return "February";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "03"
      ) {
        return "March";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "04"
      ) {
        return "April";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "05"
      ) {
        return "May";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "06"
      ) {
        return "June";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "07"
      ) {
        return "July";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "08"
      ) {
        return "August";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "09"
      ) {
        return "September";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "10"
      ) {
        return "October";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "11"
      ) {
        return "November";
      } else if (
        repository["created_at"].split("T")[0].split("-")[1] === "12"
      ) {
        return "December";
      }
    };

    const day = repository["created_at"].split("T")[0].split("-")[2];
    const year = repository["created_at"].split("T")[0].split("-")[0];
    const month = monthConversion();

    const time = repository["created_at"]
      .split("T")[1]
      .split("Z")[0]
      .split("")
      .slice(0, 5);

    return (
      <div class="timeline-row">
        <div class="timeline-time">
          {time}
          <small>
            {month} {day} {year}
          </small>
        </div>
        <div class="timeline-dot fb-bg"></div>
        <div class="timeline-content">
          {/* <RepoDisplay
            key={repository.id}
            name={repository.name}
            description={repository.description}
            created_at={repository.created_at}
            language={repository.language}
            languages_url={repository.languages_url}
            collaborators_url={repository.collaborators_url}/> */}




            <div className="box">
              <FavoriteIcon className={"like_btn"} style={{color:state.color}} onClick={()=>like()}/>
              <h3>{repository.name}</h3>
              <section class="repo-content">
                <div className="info">
                  <DescriptionIcon />
                  {repository.description}
                </div>
                <div id="created-at">
                {repository.created_at && <div className="info">
                  <BorderColorIcon />
                  {repository.created_at.split("T")[0]}
                </div>}
                </div>
                <div className="info">
                  <LanguageIcon />
                  <p>{repository.language}</p>
                  <Button variant="text" color="primary" onClick={()=>console.log(repository.languages_url)}>overview</Button>
                </div>
                <Button variant="text" color="primary" onClick={()=>console.log(repository.collaborators_url)}>Show collaborators</Button>
              </section>
            
            </div>







          
        </div>
      </div>
    );
  });

  return (
    <div class="container bootdey">
      <div class="row gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="timeline">{repositoriesObject}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


