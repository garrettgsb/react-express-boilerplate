import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import axios from 'axios';
import Layout from "./pages/Layout";
import AccountPage from './pages/AccountPage';
import CanvasPage from './pages/CanvasPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Nav from './components/nav.js';

export const AuthContext = React.createContext(null);

export default function App() {
  const [token, setToken] = useState('1');

  // if (!token) {

  // }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={token}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="canvas" element={<CanvasPage  />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="login" element={<LoginPage />}  />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
