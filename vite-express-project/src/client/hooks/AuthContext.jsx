import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({images:[]});
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // password is not in db hence has not been passed in here
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData);
        console.log('success');

        // Redirect to MyProfile route
        navigate('/user');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const value = {
    isLoggedIn,
    user,
    setUser,
    login,
    logout,
    handleLogin,
    email,
    setEmail
  };

  return (
    <AuthContext.Provider value={value}>
      {children}  
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};