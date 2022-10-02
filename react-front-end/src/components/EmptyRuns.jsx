import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function EmptyRuns(props) {
  const navigate = useNavigate();
  const { type } = props;

  const handleClick = () => {
    if (type === "attended") navigate("/runs");
    if (type === "planned") navigate("/create");
  };
  return (
    <>
      <Button
        className="empty-runs-button"
        variant="primary"
        onClick={handleClick}
      >
        {type === "attended" && "Join A Run"}
        {type === "planned" && "Plan A Run"}
      </Button>
    </>
  );
}
