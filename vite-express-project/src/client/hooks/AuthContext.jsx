import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Initialize Authentication when the app mounts
  // So when access another page form address bar, state will be set to logged in
  const initializeAuthentication = async () => {
    const isAuthenticated = await checkAuthentication();
    setIsLoggedIn(isAuthenticated);
  };
  
  useEffect(() => {
    initializeAuthentication();
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData || null);
  };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUser(null);
  // };
  
  // Log out is updated to delete cookie session 
  const logout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
  
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };  

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();

        const supabaseResponse = await fetch(`/api/supabase/users?email=${email}`);
        const supabaseUserData = await supabaseResponse.json();

        if (supabaseResponse.ok && supabaseUserData.length > 0) {
          const supabaseUserId = supabaseUserData[0].id;
          
          login(supabaseUserData[0]);

          // Navigate to the user's profile using the Supabase user ID
          navigate(`/users/${supabaseUserId}`);
          return true;
        } else {
          console.error('Failed to fetch user data from Supabase');
          return false;
        }
      } else {
        console.error('Login failed');
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  };

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/check-auth', {
        method: 'GET',
        credentials: 'include',
      });
  
      if (response.ok) {
        const result = await response.json();
        return result.authenticated;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      return false;
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
    setEmail,
    password,
    setPassword,
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