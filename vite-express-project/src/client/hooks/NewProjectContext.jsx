import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { locationType, projectType } from "../constants/TypeSelections";

const NewProjectContext = createContext();

export const NewProjectProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    budget: 10,
    location: "",
    projectType: "",
    image: [],
  });

  const filterTypes = (types, query) => {
    return query === ''
      ? types
      : types.filter(type => 
          type.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  };

  const [selectedLocation, setSelectedLocation] = useState(locationType[0]);
  const [locationTypeQuery, setLocationTypeQuery] = useState('');
  
  const [selectedProject, setSelectedProject] = useState(projectType[0]);
  const [projectTypeQuery, setProjectTypeQuery] = useState('');

  const filteredLocationType = filterTypes(locationType, locationTypeQuery);
  const filteredProjectType = filterTypes(projectType, projectTypeQuery);

  // Set State project name
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Set State: image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  // Set State: project type
  const handleProjectTypeForm = (type) => {
    setFormData({
      ...formData,
      projectType: type,
    });
  };

  const handleLocationTypeForm = (type) => {
    setFormData({
      ...formData,
      location: type,
    });
  };

  // Submit Form
  const handleSubmit = async (e, projectId) => {
    e.preventDefault();
  
    const budgetInCents = formData.budget * 100;
  
    const newFormData = new FormData();
    newFormData.append("title", formData.projectName);
    newFormData.append("description", formData.description);
    newFormData.append("budget", budgetInCents);
    newFormData.append("location", formData.location);
    newFormData.append("type", formData.projectType);
    newFormData.append("image", formData.image);
  
    try {
      let response;
      // If in edit mode, perform a PATCH
      // If not in edit mode, perform a POST request
      const requestOptions = {
        method: isEditMode ? "PATCH" : "POST",
        body: newFormData,
      };
  
      if (isEditMode) {
        response = await fetch(`/api/projects/${projectId}`, requestOptions);
      } else {
        response = await fetch("/api/projects", requestOptions);
      }
  
      if (response.ok) {
        console.log("Project submitted successfully");
        navigate(`/gigs`);
      } else {
        console.error("Error submitting project");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };
  
  const handleProjectTypeSelect = (value) => {
    setSelectedProject(value);
    handleProjectTypeForm(value.name);
  };

  const handleLocationTypeSelect = (value) => {
    setSelectedLocation(value);
    handleLocationTypeForm(value.name);
  };

  const value = {
    imagePreview,
    setImagePreview,
    formData,
    setFormData,
    handleInputChange,
    handleFileChange,
    handleSubmit,

    handleProjectTypeForm,
    selectedProject,
    filteredProjectType,
    projectTypeQuery,
    setProjectTypeQuery,

    handleLocationTypeForm,
    selectedLocation,
    filteredLocationType,
    locationTypeQuery,
    setLocationTypeQuery,

    handleProjectTypeSelect,
    handleLocationTypeSelect,
    isEditMode,
    setIsEditMode,
  };
  
  return (
    <NewProjectContext.Provider value={value}>
      {children}
    </NewProjectContext.Provider>
  );
};

export const useNewProject = () => {
  return useContext(NewProjectContext);
};
