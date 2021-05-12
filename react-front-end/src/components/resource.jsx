import React, { useState, useEffect } from "react";
import axios from 'axios';

const Resource = (props) => {

  const [resources, setResources] = useState(null);

  const fetchResources = async () => {
    const response = await axios.get(`http://localhost:8080/api/resources/moods/:category`);
    setResources(response.data)
  }

  useEffect(() => {
    fetchResources();
  }, [])

  return (
    
    <div className="Resources">
      <h1>Resources</h1>
      {resources && resources.map((resource, index) => {
        return (
          <div className="resource" key={index}>
            <h3>{resource}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default Resource;
