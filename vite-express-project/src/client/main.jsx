
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './hooks/AuthContext';
import { NewProjectProvider } from './hooks/NewProjectContext';
import { ThemeProvider } from './hooks/ThemeContext';
import { EditProjectProvider } from './hooks/EditProjectContext';


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <NewProjectProvider>
        <EditProjectProvider>
          <ThemeProvider>
          <App />
          </ThemeProvider>
        </EditProjectProvider>
      </NewProjectProvider>
    </AuthProvider>
  </BrowserRouter>
);
