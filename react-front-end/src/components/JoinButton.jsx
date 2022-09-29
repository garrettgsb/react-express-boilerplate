import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";

export default function JoinButton(props) {
  const { runType, canJoinRun, join } = props;
  const [text, setText] = useState("Join");
  const [status, setStatus] = useState(false);

  // Disable button if user has already joined the run
  useEffect(() => {
    if(!canJoinRun) {
      setText("Already joined");
      setStatus(true);
    }
  }, []);

  return (
    <>
      {runType === "available" && (
        <Button variant="primary" onClick={join} disabled={status}>
          {text}
        </Button>
      )}
    </>
  );
}
