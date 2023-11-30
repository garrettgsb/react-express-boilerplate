import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingRoute from "./routes/LandingRoute";
import UserProfile from "./routes/UserProfileRoute";
import SignupModal from "./components/SignupModal";
import ProjectProfile from "./routes/ProjectProfileRoute";

import LikedItemsRoute from "./routes/LikedItemsRoute";

import { EntityList } from "./components/EntityList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewProjectFormRoute from "./routes/NewProjectFormRoute";
import { useTheme } from "./hooks/ThemeContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const path = splitLocation[splitLocation.length - 1];
  const showFooter = !path.includes("artists") && !path.includes("gigs");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const { theme } = useTheme();

  return (    
    <div data-theme={theme} className="flex flex-col">
      <NavBar openModal={openModal} />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingRoute openModal={openModal} />}
        />
        {/* <Route exact path="/myprofile" element={<MyProfile />} /> */}
        <Route exact path="/users/:id" element={<UserProfile />} />
        <Route exact path="/artists" element={<EntityList />} />
        <Route exact path="/gigs" element={<EntityList />} />
        <Route exact path="/projects/:id" element={<ProjectProfile />} />

        <Route exact path="/likeditems/:userId" element={<LikedItemsRoute />} />
        <Route exact path="/projects/:projectId/edit" element={<NewProjectFormRoute />} />
        <Route exact path="/projects/new" element={<NewProjectFormRoute />} />
      </Routes>
      {/* Footer will be rendered within the EntityList component due to the way infinite scroll works */}
      {showFooter && <Footer />}
      {isModalOpen && <SignupModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
}

export default App;
