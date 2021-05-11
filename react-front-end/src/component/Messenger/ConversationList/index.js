import React, { useState, useEffect } from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import axios from "axios";

import "./ConversationList.css";

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = () => {
    axios.get(`/api/friends/${props.activeUser}`).then((response) => {
      let newConversations = response.data.friends.map((result) => {
        return {
          username: `${result.second_username}`,
          first_id: result.first_id,
          second_id: result.second_id,
        };
      });
      setConversations([...conversations, ...newConversations]);
    });
  };

  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      {conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.username}
          data={conversation}
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
