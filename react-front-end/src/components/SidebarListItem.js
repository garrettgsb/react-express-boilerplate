import React from "react";

import "./SidebarListItem.scss";
var classNames = require("classnames");

export default function SidebarListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li
      onClick={() => {
        props.setState({ ...props.state, currentItem: null, tab: props.name });
      }}
      className={dayClass}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
    </li>
  );
}
