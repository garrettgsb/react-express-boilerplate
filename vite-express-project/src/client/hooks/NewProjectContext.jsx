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

  const projectType = [
    { id: 1, name: 'Visual Art' },
    { id: 2, name: 'Music' },
    { id: 3, name: 'Art Classes' },
    { id: 4, name: 'Festival' },
    { id: 5, name: 'Other' },
  ]
  
  const [selected, setSelected] = useState(projectType[0])
  const [query, setQuery] = useState('')

  const filteredProjectType =
    query === ''
      ? projectType
      : projectType.filter((projectType) =>
          projectType.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

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
    selected,
    setSelected,
    query,
    setQuery,
    filteredProjectType,
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
