import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/courses.css'

export default function Courses(props) {
  const newData = props.data.map((category) => {
    return (
      <div>
        <Link to={`/course/${category.name.toLowerCase()}`}>{ category.name }</Link>

      </div>
    );
  })
  const newDataLimit = props.data.map((category) => {
    return (
      <div>
        <Link to={`/course/${category.name.toLowerCase()}`}>{ category.name }</Link>
      </div>
    );
  })

  return (
    <div className='container'>
      <div className='row'>
      <div className='col-1'>
        {newDataLimit}
      </div>
      </div>
      <ul className='col'>
        {/* {newData} */}
      </ul>
    </div>
  );
}