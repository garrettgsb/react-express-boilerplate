import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/AuthContext";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [projects, setProjects] = useState({});
  const { isLoggedIn, user, setUser } = useAuth;
  const userID = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects`);
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchLike = async () => {
      try {
        const response = await fetch(`/api/likes/3`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setItems(data);
          console.log(data);
        } else {
          const transformedData = Object.keys(data).map((key) => data[key]);
          setItems(transformedData);
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

 

    fetchProject();
    fetchLike();

  }, [id]);





  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-10">Items List</h1>

      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-50 h-60 bg-white rounded-lg shadow-md"
          >

            <a href={`/project/${item.project_id}`}>
              <img
                src={`/public${projects[10].images}`} // Replace with the URL or path to your item's image
                alt={projects.title} // Use alt text relevant to the image
                className="w-full h-40 object-cover object-center"
              />
            </a>

            <div className="p-4">
              <a
                href={`/project/${item.project_id}`}
                className="block text-lg font-semibold mb-2"
              >
                {projects.title}
              </a>
              
              <img
                src="/public/images/art_6.jpg"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 mb-11"
              />

              <p className="text-gray-600 border-solid"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
