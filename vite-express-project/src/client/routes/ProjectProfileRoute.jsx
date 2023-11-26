import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNewProject } from "../hooks/NewProjectContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
 
function convertRate(cents) {
  const dollars = cents / 100;
  return dollars.toFixed(2);
}

export default function ProjectProfile() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { setIsEditMode } = useNewProject();
  const navigate = useNavigate();
  const { user } = useAuth();
  
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
    <div className="mb-64">
      <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:items-start">
        <div className="m-5 w-1/2 overflow-hidden border border-gray-300 drop-shadow-3xl rounded-3xl">
          <img
            src="/public/images/art_4.jpg" //change to project.image when ready
            alt={`${project.title} image`}
            className=""
          />
        </div>

        <div className="flex flex-col justify-start md:mt-20 md:ml-16">
          <header className="font-heading text-3xl text-primary ">
          {project.title}
          </header>
          <main className="flex">
            <div className="m-5">
              
              <div className="flex flex-row items-center m-5">
                <img
                  src="/public/images/art_6.jpg"
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 m-5"
                />
                <p className="font-subHeading text-xl text-secondary">
                  Posted by {project.employer_id}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <span>Project Type: {project.type}</span>
                <span>Location: {project.location}</span>
                <span>Budget: ${convertRate(project.budget)}</span>
              </div>
              
            </div>
          </main>
          <div className="mt-5">
            <p>{project.description}</p>
          </div>
          
        </div>
      </div>
      
      { user && user.id === project.employer_id && (
        <div className="flex justify-end m-5">
          <button 
            className="btn btn-outline btn-secondary"
            onClick={() => handleEditClick(id)}>
            Edit project
          </button>
        </div>
      )}
    </div>
    
  );
}
