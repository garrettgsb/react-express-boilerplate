import React from "react";
import { Row, Col } from "react-bootstrap";

const checkboxStyle = {
    width: "2rem",
    height: "2rem",
    border: "2px solid #fff",
    padding: "0.5rem"
};

export default function SearchOptions(props) {
  const optionItems = Object.keys(props.options).map(option => (
    <Col key={option} className="options__form-group" lg={3}>
      <input
        className="options__checkbox mr-1"
        type="radio"
        style={checkboxStyle}
        name={props.name}
        id={option}
        checked={props.options[option]}
        onChange={event => {
          props.setOption(option, event.target.checked);
        }}
      />
      <label className="options__label align-top" htmlFor={option}> {option}</label>
    </Col>
  ));

  return (
    <Row className="text-left pl-5">
      {optionItems}
    </Row>
  );
}