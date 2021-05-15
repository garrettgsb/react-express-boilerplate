import React, { useEffect } from "react";
import shave from "shave";

import "./ConversationListItem.css";

export default function ConversationListItem(props) {
  useEffect(() => {
    shave(".conversation-snippet", 20);
  });

  const { username } = props.data;

  return (
    <div className="conversation-list-item" onClick={props.onClick}>
      <div className="conversation-info">
        <h1 className="conversation-title">{username}</h1>
      </div>
    </div>
  );
}
