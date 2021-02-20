import React from "react";
import axios from "axios";
import useApplicationData from "../useApplicationData";
import "./OppositeTimeline.css";
import { useState, useEffect } from "react";

import RepoDisplay from "./repoDisplay/RepoDisplay.js";

const toStamp = (string) => {
  const date = string.split("-");
  const stamp = new Date(date[0], date[1] - 1, date[2]);
  return stamp.getTime();
};


export default function OppositeTimeline(props) {
  const [userLiked, setUserLiked] = useState();
  const [num, setNum] = useState(0);
  const renderPage = () => {
    setNum(prev=>prev+1)
  }
  useEffect(() => {
    console.log("request")
    if (localStorage.getItem("username")) {
      axios.get("http://localhost:8081/favourites", {
        params: {
          userId: localStorage.getItem("username"),
        },
      }).then((res) => {
        setUserLiked(res.data);
      });
    }
  },[num]);
  const param = props.filterParam;

  const repositoryArray = props.repositories.filter((repo) => {
    if (param) {
      if (param.repoName.trim() && !repo.name.includes(param.repoName.trim())) {
        return false;
      }
      if (param.language.trim()) {
        if (!repo.language) {
          return false;
        }
        if (
          !repo.language
            .toLowerCase()
            .includes(param.language.trim().toLowerCase())
        ) {
          return false;
        }
      }
      if (
        param.dateBegin &&
        toStamp(param.dateBegin) > toStamp(repo.updated_at.split("T")[0])
      ) {
        return false;
      }
      if (
        param.dateEnd &&
        toStamp(param.dateEnd) < toStamp(repo.updated_at.split("T")[0])
      ) {
        return false;
      }
    }
    return true;
  });
  const monthObject = {"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September","10":"October","11":"November","12":"December"}
  const repositoriesObject = repositoryArray
    .sort((a, b) => new Date(b["updated_at"]) - new Date(a["updated_at"]))
    .map((repository) => {
      const day = repository["updated_at"].split("T")[0].split("-")[2];
      const year = repository["updated_at"].split("T")[0].split("-")[0];
      const month = monthObject[repository["updated_at"].split("T")[0].split("-")[1]];
      let liked = "";
      if (userLiked) {
        liked = userLiked.filter((repo) => {
          if (
            repo.repoowner === repository.owner.login &&
            repo.reponame === repository.name
          ) {
            return true;
          }
          return false;
        });
      }
      const likedBool = liked.length>0
      return (
        <div class="timeline-row">
          <div class="timeline-time">
            <small id="date-size">
              {month} {day}, {year}
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

            <RepoDisplay
              name={repository.name}
              description={repository.description}
              created_at={repository["created_at"]}
              language={repository.language}
              languages_url={repository["languages_url"]}
              contributors_url={repository.contributors_url}
              avatar_url={repository.owner.avatar_url}
              owner={repository.owner.login}
              userLiked={likedBool}
              renderPage={renderPage}
              
            />
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
