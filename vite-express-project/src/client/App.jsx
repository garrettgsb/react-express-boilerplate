import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./routes/LandingRoute";
import SignupModal from "./components/SignupModal";

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
      <Landing openModal={openModal} />
      <Footer />
      {isModalOpen && <SignupModal isOpen={isModalOpen} onClose={closeModal} />}
    </>

  );
}

export default App;
