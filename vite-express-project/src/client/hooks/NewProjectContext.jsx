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
  const handleSubmit = async (e, employer_id) => {
    e.preventDefault();
  
    const budgetInCents = formData.budget * 100;
  
    const newFormData = new FormData();
    newFormData.append("title", formData.projectName);
    newFormData.append("description", formData.description);
    newFormData.append("budget", budgetInCents);
    newFormData.append("location", formData.location);
    newFormData.append("type", formData.projectType);
  
    if (formData.image) {
      newFormData.append("image", formData.image);
    }

    try {
      let response;

      response = await fetch("/api/projects", {
        method: "POST",
        body: newFormData,
      })
  
      // const requestOptions = {
      //   method: isEditMode ? "PATCH" : "POST",
      //   // Use updateData for PATCH and newFormData for POST
      //   body: isEditMode ? JSON.stringify(updateData) : newFormData,
      // };
  
      // if (isEditMode) {
      //   // For PATCH requests, send JSON data in the body
      //   response = await fetch(`/api/projects/${projectId}`, requestOptions);
      // } else {
      //   // For POST requests, send FormData in the body
      //   response = await fetch("/api/projects", requestOptions);
      // }
  
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
  
  const handleEditSubmit = async (e, projectId, employer_id) => {
    e.preventDefault();
  
    const budgetInCents = formData.budget * 100;
  
    // Construct data for JSON payload
    const data = {
      title: formData.projectName,
      description: formData.description,
      budget: budgetInCents,
      location: formData.location,
      type: formData.projectType,
      ...(formData.image && { images: formData.image }),
    };
  
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // let response;
      // let requestOptions;

      // if (isEditMode) {
      //   // If in edit mode, perform a PATCH with JSON payload
      //   requestOptions = {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   };
      //   response = await fetch(`/api/projects/${projectId}`, requestOptions);
      // } else {
      //   // If not in edit mode, perform a POST with FormData
      //   const newFormData = new FormData();
      //   newFormData.append("title", formData.projectName);
      //   newFormData.append("description", formData.description);
      //   newFormData.append("budget", budgetInCents);
      //   newFormData.append("location", formData.location);
      //   newFormData.append("type", formData.projectType);
  
      //   if (formData.image) {
      //     newFormData.append("images", formData.image);
      //   }
  
      //   requestOptions = {
      //     method: "POST",
      //     body: newFormData,
      //   };
      //   response = await fetch("/api/projects", requestOptions);
      // }
  
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
    handleEditSubmit,

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
