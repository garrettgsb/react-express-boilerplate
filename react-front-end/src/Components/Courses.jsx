import React from 'react';
import { Link } from "react-router-dom";

export default function Courses(props) {
  const newData = props.data.map((category) => {
    return (
      <div>
        <Link to={`/course/${category.name.toLowerCase()}`}>{ category.name }</Link>

      </div>
    );
  })

  return (
    <>
      <ul>{newData}</ul>
    </>
  );
}