import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TopNavigationBar from './components/TopNavigationBar';
import Home from './components/Home';
import Login from './components/login';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LoginWithNavigate />} />
        <Route path="/signup" element={<SignUp />} />
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
