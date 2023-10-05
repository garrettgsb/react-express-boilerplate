// AuthContext.js
import React, {  createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUserData, setAuthUserData] = useState(null)

  const getUserData = () => {
    return axios
      .get("/api/userData")
      .then((response) => {
        setAuthUserData(response.data);
        setIsLoggedIn(true)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  const login = async () => {
    await getUserData();
    };

  const logout = () => {
    axios
    .get("/api/logout")
    .then((reponse) => {
    setIsLoggedIn(false);
    setAuthUserData(null);
    })
    .catch((error) => {
      console.error("Error logging out", error)
    })
  
    // You can clear user data here if needed.
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
