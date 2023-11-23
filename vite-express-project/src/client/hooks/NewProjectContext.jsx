import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const projectType = [
    { id: 1, name: 'Select Type' },
    { id: 2, name: 'Mural Painting' },
    { id: 3, name: 'Visual Art' },
    { id: 4, name: 'Music Events' },
    { id: 5, name: 'Art Education' },
    { id: 6, name: 'Festivals/Events' },
    { id: 7, name: 'Other' },
  ]
  
  const [selectedProject, setSelectedProject] = useState(projectType[0])
  const [query, setQuery] = useState('')
  const [projectTypeQuery, setProjectTypeQuery] = useState('');

  const filteredProjectType =
    query === ''
      ? projectType
      : projectType.filter((projectType) =>
          projectType.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

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
    handleProjectTypeForm,
    handleSubmit,
    selectedProject,
    setSelectedProject,
    query,
    setQuery,
    filteredProjectType,
    projectTypeQuery,
    setProjectTypeQuery

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
