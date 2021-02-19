import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./RepoDisplay.css";
import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function RepoSummary(props) {
  
  const [likeBool, setLikeBool] = useState(props.userLiked);
  useEffect(() => {
    if (props.userLiked) {
      setLikeBool(true);
    }else{
      setLikeBool(false)
    }
  });
  const handleLikeClick = () => {
    axios
      .put("http://localhost:8081/favourites", {
        username: localStorage.getItem("username"),
        repoName: props.name,
        repoLanguage: props.language || "language",
        repoDescription: props.description,
        gitAvatar: props.avatar_url,
        repoOwner: props.owner,
      })
      .then(() => {
        setLikeBool(true);
        props.renderPage();
      });
  };
  const handleUnlikeClick = () => {
    axios
      .delete(
        `http://localhost:8081/favourites/${props.owner}/${
          props.name
        }/${localStorage.getItem("username")}`
      )
      .then(() => {
        setLikeBool(false);
        props.renderPage();
      });
  };

  return (
    <div className="box">
      <FavoriteIcon
        className={"like_btn"}
        style={likeBool ? { color: "red" } : { color: "white" }}
        onClick={likeBool ? handleUnlikeClick : handleLikeClick}
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
