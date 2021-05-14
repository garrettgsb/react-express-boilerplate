import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import MenuAppBar from "./navbar";

const Resource = (props) => {
  let { category } = useParams();
  const [resources, setResources] = useState(null);
  const url = `http://localhost:8080/api/resources/moods/${category}`;
  const fetchResources = async () => {
    const response = await axios.get(url);
    setResources(response.data);
  };

  const toggleFavourited = async (id) => {
    const response = await axios.post(
      `http://localhost:8080/api/favourites/toggle/${id}`
    );

    setResources((liveResources) => {
      return liveResources.map((resource) => {
        if (resource.id === id) {
          resource.favourited = !resource.favourited;
        }
        return resource;
      });
    });
  };

  useEffect(() => {
    fetchResources();
  }, [category]);

  return (
    <>
      <MenuAppBar />
      <div className="Resources">
        {resources &&
          resources.map((resource) => {
            return (
              <div className="resource" key={resource.id}>
                <h1 className="Title">- {resource.title} -</h1>
                <h3>{resource.category}</h3>
                <h3 className="Description">{resource.content} </h3>
                <button>
                  <a href={resource.link} target="_blank">
                    Click Me
                  </a>
                </button>
                <FontAwesomeIcon
                  onClick={() => {
                    toggleFavourited(resource.id);
                  }}
                  className="Heart"
                  style={{ color: resource.favourited ? "red" : "white" }}
                  icon={faHeart}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Resource;
