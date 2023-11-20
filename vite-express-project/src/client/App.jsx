import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingRoute from "./routes/LandingRoute";
import MyProfile from "./routes/MyProfileRoute";
import UserProfile from "./routes/UserProfileRoute";
import SignupModal from "./components/SignupModal";
import ProjectProfile from "./routes/ProjectProfileRoute";
import { Projects } from "./components/projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (    
    <AuthProvider>
      <NavBar openModal={openModal} />

      <Routes>
        <Route
          exact
          path="/"
          element={<LandingRoute openModal={openModal} />}
        />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/users/:id" element={<UserProfile />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/project/:id" element={<ProjectProfile />} />
      </Routes>
      <Footer />
      {isModalOpen && <SignupModal isOpen={isModalOpen} onClose={closeModal} />}
    </AuthProvider>

    // <>
    //   <NavBar openModal={openModal} />
    //   <Landing openModal={openModal} />
    //   <Footer />
    //
    // </>

  );
}

export default App;
