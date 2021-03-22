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
    <Col key={option} className="options__form-group" lg={2}>
      <input
        className="options__checkbox mr-2"
        type="checkbox"
        style={checkboxStyle}
        name={option}
        id={option}
        checked={props.options[option]}
        onChange={event => props.setOption(option, event.target.checked)}
      />
      <label className="options__label align-top" htmlFor={option}> {option}</label>
    </Col>
  ));

  return (
    <Row>
      {/* <Col lg={1}></Col> */}
      {optionItems}
    </Row>
  );
}