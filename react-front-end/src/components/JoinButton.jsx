import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useRecoilValue } from "recoil";
import { userState} from "../hooks/useAppData";
import { useNavigate } from "react-router-dom";

export default function JoinButton(props) {
  const { runType, joinStatus, join } = props;
  const [text, setText] = useState("Join");
  const [buttonStatus, setButtonStatus] = useState(false);
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  

  // Disable button if user has already joined the run
  useEffect(() => {
    if(!joinStatus) {
      setText("Already joined");
      setButtonStatus(true);
    }
  }, []);

  const checkLoginStatus = () =>{
    if (user) join();
    else navigate("/signin");
  }

  return (
    <>
      {runType === "available" && (
        <Button className="join-button" variant="primary" onClick={checkLoginStatus} disabled={buttonStatus} >
          {text}
        </Button>
      )}
    </>
  );
}
