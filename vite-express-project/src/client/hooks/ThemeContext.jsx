import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const themes = [
    { label: "Default", value: "default" },
    { label: "Retro", value: "retro" },
    { label: "Cyberpunk", value: "cyberpunk" },
    { label: "Autumn", value: "autumn" },
    { label: "Aqua", value: "aqua" },
    { label: "Coffee", value: "coffee"},
    { label: "Black", value: "black"},
  ];
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme && themes.some((t) => t.value === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  return(
    <ThemeContext.Provider value={{ theme, setTheme, themes, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return  useContext(ThemeContext);
};