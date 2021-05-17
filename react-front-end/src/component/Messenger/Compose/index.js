import React, { useState } from "react";
import "./Compose.css";

export default function Compose(props) {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    props.addMessage(text);
    setText("");
  };

  return (
    <div>
      <form className="compose" onSubmit={(event) => submitForm(event)}>
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
      {props.rightItems}
    </div>
  );
}
