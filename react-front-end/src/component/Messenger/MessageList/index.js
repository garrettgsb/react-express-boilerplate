import React, { useState, useEffect } from "react";
import Compose from "../Compose";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import Message from "../Message";
import moment from "moment";
import axios from "axios";
import useInterval from "../../../util/useInterval";
import "./MessageList.css";

export default function MessageList(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, [props.activeConversation]);

  useInterval(() => {
    getMessages();
  }, 1000);

  const getMessages = () => {
    axios
      .get(
        `/api/messages/${props.activeConversation[0]}/${props.activeConversation[1]}
    `
      )
      .then((response) => {
        let tempMessages = response.data.messages.map((result) => {
          return {
            id: result.id,
            author: result.sender_id,
            message: result.message,
            timestamp: result.date,
          };
        });
        setMessages([...tempMessages]);
      });
  };

  const addMessage = (message) => {
    const messagePromise =
      props.activeConversation[0] === props.activeUser
        ? axios.put("/api/messages", {
            sender_id: props.activeConversation[0],
            receiver_id: props.activeConversation[1],
            message,
          })
        : axios.put("/api/messages", {
            sender_id: props.activeConversation[1],
            receiver_id: props.activeConversation[0],
            message,
          });
    messagePromise.then(() => getMessages());
  };

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];
    while (i < messageCount) {
      let previous = messages[i];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === props.activeUser;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as("hours") < 1) {
          startsSequence = false;
        }

        if (previousDuration.as("hours") < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as("hours") < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  };

  return (
    <div className="message-list">
      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton
            key="info"
            icon="ion-ios-information-circle-outline"
          />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />,
        ]}
      />

      <div className="message-list-container">{renderMessages()}</div>

      <Compose
        addMessage={addMessage}
        rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />,
        ]}
      />
    </div>
  );
}
