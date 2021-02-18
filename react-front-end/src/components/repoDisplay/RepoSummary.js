import React from "react";
import axios from "axios";
import { useState } from "react";
import "./RepoDisplay.css";
import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function RepoSummary(props) {
  const [state, setState] = useState({ color: "black" });
  const like = () => {
    axios.put("http://localhost:8081/favourites",{
      user_id:localStorage.getItem('username'),
      repoName:props.name,
      repoLanguage:props.language,
      repoDescription:props.description,
      gitAvatar:props.avatar_url,
      repoOwner:props.owner,
    })
    .then((res)=>{
      console.log(res)
      state.color === "red"
        ? setState((prev) => ({ color: "black" }))
        : setState((prev) => ({ color: "red" }));
    })
  };

  return (
    <div className="box">
      <FavoriteIcon
        className={"like_btn"}
        style={{ color: state.color }}
        onClick={() => like()}
      />
      <h3>{props.name}</h3>
      <section class="repo-content">
        <div className="info">
          <DescriptionIcon />
          {props.description || "Description"}
        </div>
        <div id="created-at">
          {props.created_at && (
            <div className="info">
              <BorderColorIcon />
              {props.created_at.split("T")[0]}
            </div>
          )}
        </div>
        <div className="info">
          <LanguageIcon />
          <p>{props.language || "Language"}</p>
          <Button
            variant="text"
            color="primary"
            onClick={() => props.showLanguages(props.languages_url)}
          >
            overview
          </Button>
        </div>
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            props.showContributors(props.contributors_url);
          }}
        >
          Show Contributors
        </Button>
      </section>
    </div>
  );
}
