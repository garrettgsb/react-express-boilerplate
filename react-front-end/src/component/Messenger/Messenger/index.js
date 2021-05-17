import React, { useState } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import "./Messenger.css";
import useApplicationData from "../../../hooks/useApplicationData";

export default function Messenger(props) {
  let conversation = localStorage.getItem("activeConversation");
  if (conversation !== null) {
    conversation = conversation.split(",");
    if (conversation[0] === conversation[1]) {
      conversation[0] = 0;
      conversation[1] = 0;
    }
  }
  if (conversation === null) {
    conversation = [0, 0];
  }
  const [activeConversation, setActiveConversation] = useState([
    conversation[0],
    conversation[1],
  ]);
  localStorage.setItem("activeConversation", [0, 0]);

  const { state } = useApplicationData();

  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList
          conversations={state.friends}
          activeUser={state.activeUser}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
        />
      </div>

      <div className="scrollable content">
        <MessageList
          activeUser={state.activeUser}
          activeConversation={activeConversation}
        />
      </div>
    </div>
  );
}
