import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import axios from 'axios';
import './App.css';
import Layout from "./pages/Layout";
import AccountPage from './pages/AccountPage';
import CanvasPage from './pages/CanvasPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="canvas" element={<CanvasPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
