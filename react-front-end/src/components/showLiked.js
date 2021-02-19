import React from "react";
import "./showLiked.css";
import ClearIcon from '@material-ui/icons/Clear';
export default function ShowLiked(props) {
  return (
    <div className="liked">
      <h1>My favorite</h1>
      <button
        className="close-btn"
        onClick={() => {
          props.toMain();
        }}
      >
        <ClearIcon></ClearIcon>
      </button>
    </div>
  );
}
