import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNewProject } from "../hooks/NewProjectContext";
import { useNavigate } from "react-router-dom";
 
function convertRate(cents) {
  const dollars = cents / 100;
  return dollars.toFixed(2);
}

export default function ProjectProfile() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { setIsEditMode } = useNewProject();
  const navigate = useNavigate();
  
  const handleEditClick = async (projectId) => {
    setIsEditMode(true);
    navigate(`/projects/${projectId}/edit`);
  };
  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProject(data[0]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProject();
  }, [id]);

  return (
    <div className="mb-64 mt-10 flex flex-col justify-center">
      <header className="font-Heading text-3xl text-slate-500 flex justify-between p-5  ">
        {project.title}

          <button 
            className="btn btn-outline btn-secondary"
            onClick={() => handleEditClick(id)}>
            Edit project
          </button>
      
      </header>

      <main className="flex justify-center">
        <div className="m-5 w-50 h-50 overflow-hidden border border-gray-300 drop-shadow-3xl rounded-3xl">
          <img
            src="/public/images/art_4.jpg" //change to project.image when ready
            alt={`${project.title} image`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="m-5">
          <div className="m-5 text-center">
            <div className="flex flex-row items-center m-10">
              <img
                src="/public/images/art_6.jpg"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 m-5"
              />
              <p className="text-2xl  text-slate-500">
                Posted by {project.employer_id}
              </p>
            </div>
          </div>

          <h2 className="font-subHeading text-l mb-2 flex flex-col">
            Project Type: {project.type} <br />
            Location: {project.location} <br />
            Budget: ${convertRate(project.budget)}
            <br />
          </h2>
        </div>
      </main>

      <div className="flex">
        <p>{project.description}</p>
      </div>

      <div className="flex flex-row justify-center items-center my-5">
        <button className="font-subHeading bg-button hover:bg-buttonHover text-white text-lg font-bold py-1 px-4 rounded ml-auto">
          Edit project
        </button>
      </div>
    </div>
  );
}
