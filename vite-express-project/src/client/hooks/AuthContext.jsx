import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
  
  // Initialize Authentication when the app mounts
  // So when access another page form address bar, state will be set to logged in
  const initializeAuthentication = async () => {
    try {
      const isAuthenticated = await checkAuthentication();
      if (isAuthenticated) {
        const response = await fetch('/api/user-data', {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const userData = await response.json();
          setLoggedInUser(userData);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } else {
        setIsLoggedIn(false);
        setLoggedInUser(null);
      }
  
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error during authentication:', error);
    }
  };

  useEffect(() => {
    initializeAuthentication();
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setLoggedInUser(userData || null);
  };

  // Log out is updated to delete cookie session 
  const logout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setEmail('');
      setPassword('');
      setIsLoggedIn(false);
      setLoggedInUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };  

  const handleLogin = async () => {
    try {
      // reset error state to clear error msg
      setError(null);
      
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // const userData = await response.json();

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
        
        // Get error message from api and set it to client
        const errorMessage = await response.json();
        setError(errorMessage.error);
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occured');
      return false;
    }
  };
    
  const resetError = () => {
    setError(null);
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
    error,
    resetError,
    isLoading,
    checkAuthentication,
    loggedInUser,
    setLoggedInUser
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