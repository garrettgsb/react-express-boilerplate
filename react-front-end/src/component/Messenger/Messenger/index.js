import React, { useState } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import "./Messenger.css";
import useApplicationData from "../../../hooks/useApplicationData";

export default function Messenger(props) {
  const [activeConversation, setActiveConversation] = useState([0, 0]);
  const { state } = useApplicationData();

  return (
    <div className="messenger">
      {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

      {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

      <div className="scrollable sidebar">
        <ConversationList
          conversations={state.friends}
          activeUser={state.activeUser}
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
