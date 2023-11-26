import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { locationType, projectType } from "../constants/TypeSelections";

const NewProjectContext = createContext();

export const NewProjectProvider = ({ children }) => {
  const navigate = useNavigate();

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
      locationType: type,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const budgetInCents = formData.budget * 100;

    const data = new FormData();
    data.append("title", formData.projectName);
    data.append("description", formData.description);
    data.append("budget", budgetInCents);
    data.append("location", formData.location);
    data.append("type", formData.projectType);
    data.append("image", formData.image);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Project submitted successfully");
        
        // after form submission it will redirect to landing page for now
        navigate("/");
      } else {
        console.error("Error submitting project");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
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
    setSelectedProject,
    filteredProjectType,
    projectTypeQuery,
    setProjectTypeQuery,

    handleLocationTypeForm,
    selectedLocation,
    setSelectedLocation,
    filteredLocationType,
    locationTypeQuery,
    setLocationTypeQuery,

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
