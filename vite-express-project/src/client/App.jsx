import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingRoute from "./routes/LandingRoute";
import MyProfile from "./routes/MyProfileRoute";
import UserProfile from "./routes/UserProfileRoute";
import SignupModal from "./components/SignupModal";
import ProjectProfile from "./routes/ProjectProfileRoute";

import LikedItemsRoute from "./routes/LikedItemsRoute";

import { Projects } from "./components/projects";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import NewProjectFormRoute from "./routes/NewProjectFormRoute";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const splitLocation = location.pathname.split('/');
  const path = splitLocation[splitLocation.length - 1]
  const showFooter = !path.includes('artists') && !path.includes('gigs');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (    
    <>

      <NavBar openModal={openModal} />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingRoute openModal={openModal} />}
        />
        {/* <Route exact path="/myprofile" element={<MyProfile />} /> */}
        <Route exact path="/users/:id" element={<UserProfile />} />
        <Route exact path="/artists" element={<Projects />} />
        <Route exact path="/gigs" element={<Projects />} />
        <Route exact path="/project/:id" element={<ProjectProfile />} />

        <Route exact path="/likeditems" element={<LikedItemsRoute />} />

        <Route exact path="/project/new" element={<NewProjectFormRoute />}/>

      </Routes>
      {/* Footer will be rendered within the Projects component due to the way infinite scroll works */}
      {showFooter && <Footer />}
      {isModalOpen && <SignupModal isOpen={isModalOpen} onClose={closeModal} />}
    </>

    // <>
    //   <NavBar openModal={openModal} />
    //   <Landing openModal={openModal} />
    //   <Footer />
    //
    // </>
  );
}

export default App;
