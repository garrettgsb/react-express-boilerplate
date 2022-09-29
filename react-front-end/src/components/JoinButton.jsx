import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function JoinButton(props) {
  const { runType, joinStatus, join } = props;
  const [text, setText] = useState("Join");
  const [buttonStatus, setButtonStatus] = useState(false);
  

  // Disable button if user has already joined the run
  useEffect(() => {
    if(!joinStatus) {
      setText("Already joined");
      setButtonStatus(true);
    }
  }, []);

  return (
    <>
      {runType === "available" && (
        <Button variant="primary" onClick={join} disabled={buttonStatus} >
          {text}
        </Button>
      )}
    </>
  );
}
