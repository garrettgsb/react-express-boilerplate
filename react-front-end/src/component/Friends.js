import React from "react";
import axios from "axios";
import Messenger from "./Messenger/Messenger";

export default function Friends(props) {
  const getFriends = () => {
    if (props.activeUser === 0) {
      return [];
    }
    axios.get(`/api/friends/${props.activeUser}`).then((res) => {
      friends = res.data.friends;
      console.log(friends);
    });
  };
  let friends = [];
  getFriends();

  return (
    <div>
      <Messenger />
      {friends[0] && <p> Friends loaded </p>}
      <div className="Friend">You have reached the friend route</div>
    </div>
  );
}
