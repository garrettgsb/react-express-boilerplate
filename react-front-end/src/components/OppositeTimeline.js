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

  const repositoriesObject = repositoryArray
    .sort((a, b) => new Date(b["updated_at"]) - new Date(a["updated_at"]))
    .map((repository) => {
      const monthConversion = () => {
        if (repository["updated_at"].split("T")[0].split("-")[1] === "01") {
          return "January";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "02"
        ) {
          return "February";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "03"
        ) {
          return "March";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "04"
        ) {
          return "April";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "05"
        ) {
          return "May";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "06"
        ) {
          return "June";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "07"
        ) {
          return "July";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "08"
        ) {
          return "August";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "09"
        ) {
          return "September";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "10"
        ) {
          return "October";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "11"
        ) {
          return "November";
        } else if (
          repository["updated_at"].split("T")[0].split("-")[1] === "12"
        ) {
          return "December";
        }
      };

      const day = repository["updated_at"].split("T")[0].split("-")[2];
      const year = repository["updated_at"].split("T")[0].split("-")[0];
      const month = monthConversion();

      // const time = repository["updated_at"]
      //   .split("T")[1]
      //   .split("Z")[0]
      //   .split("")
      //   .slice(0, 5);
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
