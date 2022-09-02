import React from "react";

export default function Courses(props) {
  console.log(props);
  const newData = props.data.map((category)=> {
    return(
      <div>
        <h1>{category.name}</h1>
      </div>
    );
  })
return (
  <ul>{newData}</ul>
);
}