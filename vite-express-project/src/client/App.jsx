import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingRoute from "./routes/LandingRoute";
import MyProfile from "./routes/MyProfileRoute";
import SignupModal from "./components/SignupModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Route exact path="/" element={<LandingRoute openModal={openModal} />}/>
        <Route exact path="/myprofile" element={<MyProfile />} />
      </Routes>
      <Footer />
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
