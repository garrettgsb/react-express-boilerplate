import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, methods } from "../firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return methods.createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return methods.signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return methods.signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
