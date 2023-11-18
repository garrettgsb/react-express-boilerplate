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
        console.log('Login success:', userData);

        const supabaseResponse = await fetch(`/api/supabase/users?email=${email}`);
        const supabaseUserData = await supabaseResponse.json();

        if (supabaseResponse.ok && supabaseUserData.length > 0) {
          const supabaseUserId = supabaseUserData[0].id;
          console.log(supabaseUserId);
  
          // Navigate to the user's profile using the Supabase user ID
          navigate(`/users/${supabaseUserId}`);
        } else {
          console.error('Failed to fetch user data from Supabase');
        }
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