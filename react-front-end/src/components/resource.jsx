import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Resource = (props) => {
  const category = props.category.category
  const [resources, setResources] = useState(null);
  const url = `http://localhost:8080/api/resources/moods/${category}`


  const fetchResources = async () => {
    const response = await axios.get(url);
    setResources(response.data)
  }

  useEffect(() => {
    fetchResources();
  }, [category])

  return (
    
    <div className="Resources">
      <h1>Resources</h1>
      {resources && resources.map((resource) => {
        return (
          <div className="resource" key={resource.id}>
            <h3>{resource.title}</h3>
            <h3>{resource.category}</h3>
            <h3>{resource.link}</h3>
            <h3>{resource.content}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default Resource;
