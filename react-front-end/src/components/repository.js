import React from "react";

export default function Repository(props) {
    return (
      <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props["created_at"]}</p>
      </div>
    );
}
