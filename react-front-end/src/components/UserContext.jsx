import { createContext, useState, useContext } from "react";

// Create a UserContext
export const UserContext = createContext();

// Create a UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    
    // Set the user data when the user signs in
    setUser(userData);
  };

  const signOut = () => {
    
    // Clear the user data when the user signs out
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to simplify using the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
