import React from "react";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";

import "./ConversationList.css";

export default function ConversationList(props) {
  return (
    <div className="conversation-list">
      <Toolbar title="Messenger" />
      {props.conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.friends_id}
          data={conversation}
          activeConversation={
            (props.activeConversation[0] === conversation.first_id &&
              props.activeConversation[1] === conversation.second_id) ||
            (props.activeConversation[0] === conversation.second_id &&
              props.activeConversation[1] === conversation.first_id)
          }
          activeUser={props.activeUser}
          onClick={() =>
            props.setActiveConversation([
              conversation.first_id,
              conversation.second_id,
            ])
          }
        />
      ))}
    </div>
  );
}
