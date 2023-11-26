import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNewProject } from "./NewProjectContext";

const EditProjectContext = createContext();

export const EditProjectProvider = ({ children }) => {
  const { setFormData } = useNewProject();
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  const fetchProjectById = async (projectId) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`);
      if (response.ok) {
        const projectData = await response.json();
        return projectData;
      } else {
        console.error("Error fetching project data:", response.statusText);
        throw new Error("Failed to fetch project data");
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
      throw error;
    }
  };
  
  const handleEditClick = async (projectId) => {
    try {
      const projectData = await fetchProjectById(projectId);
      
      setFormData({
        projectName: projectData.projectName,
        description: projectData.description,
        budget: projectData.budget / 100,
        location: projectData.location,
        type: projectData.type,
        image: null,
      });
      setIsEditMode(true);
      navigate(`/project/${projectId}/edit`);
    } catch (error) {
      console.error("Error fetching project data for edit:", error);
    }
  };

  const updateProject = async (projectId, updatedData) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log("Project updated successfully");
        // You can handle additional logic after project update if needed
      } else {
        console.error("Error updating project");
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const value = {
    isEditMode,
    handleEditClick,
    updateProject,
  };

  return (
    <EditProjectContext.Provider value={value}>
      {children}
    </EditProjectContext.Provider>
  )
};

export const useEditProject = () => {
  return useContext(EditProjectContext);
};