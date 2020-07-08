import React from "react";

export default function Card(props) {
  const { title, total, icon } = props;
  return (
    <div style={{ border: "2px solid black" }}>
      <i class={icon}></i>
      <h2>{title}</h2>
      <h2>{total}</h2>
    </div>
  );
}
//style={{ fontSize: "100px" }}
