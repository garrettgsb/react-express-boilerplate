import { createContext, useContext, useState } from "react";

const NewProjectContext = createContext();

export const NewProjectProvider = ({ children }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    budget: 10,
    location: "",
    projectType: "",
    image: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleProjectTypeSelect = (type) => {
    setFormData({
      ...formData,
      projectType: type,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.projectName);
    data.append("description", formData.description);
    data.append("budget", formData.budget);
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
    handleProjectTypeSelect,
    handleSubmit,
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
