import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

export default function EmptyRuns(props) {
  const navigate = useNavigate();
  const [type, setType] = useState("");

  const handleClick = () => {
    navigate(type.link);
  };

  useEffect(() => {
    if (props.type === "attended")
      setType({
        link: "/runs",
        action: "Join",
        headingText:
          "You have not participated in any runs yet. See all available runs in your area.",
      });
    if (props.type === "planned")
      setType({
        link: "/create",
        action: "Plan",
        headingText:
          "You have not planned any runs yet. Plan a new running event.",
      });
  }, [props.type]);

  return (
    <>
      <Container className="empty-runs-container">
        <h3>{type.headingText}</h3>
        <Button
          className="empty-runs-button"
          variant="primary"
          onClick={handleClick}
        >
          {type.action}
        </Button>
      </Container>
    </>
  );
}
