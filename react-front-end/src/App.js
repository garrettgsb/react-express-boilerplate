import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import axios from 'axios';
import Layout from "./pages/Layout";
import AccountPage from './pages/AccountPage';
import CanvasPage from './pages/CanvasPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export const AuthContext = React.createContext(null);

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Layout setUser={setUser}/>}>
            <Route index element={<HomePage />} />
            <Route path="canvas" element={<CanvasPage  />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="login" element={<LoginPage setUser={setUser}/>}  />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
