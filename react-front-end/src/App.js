import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TopNavigationBar from './components/TopNavigationBar';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LoginWithNavigate />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

// Helper component to pass the navigate function to Login
const LoginWithNavigate = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
}

export default App;
