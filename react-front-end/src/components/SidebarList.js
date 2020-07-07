import React from "react";
import SidebarListItem from "./SidebarListItem";

export default function SidebarList(props) {
  const sidebarItems = props.tabs.map((tab, index) => {
    return (
      <SidebarListItem
        key={index}
        name={tab}
        selected={tab === props.tab}
        state={props.state}
        setState={props.setState}
      />
    );
  });

  return sidebarItems;
}
