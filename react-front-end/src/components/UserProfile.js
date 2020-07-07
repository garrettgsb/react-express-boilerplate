import React from "react";

export default function UserProfile(props) {
  return (
    <div>
      <p>{props.userData.username}</p>
      <p>{props.userData.email}</p>
      <p>{props.userData.phone}</p>
    </div>
  );
}
