import SignupModal from "./SignupModal";
import { useState } from "react";

const navigation = [
  { name: "Find Artists", href: "#" },
  { name: "Find Gigs", href: "#" },
];

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4pb-1.5 h-10">
      <span className="font-heading text-4xl whitespace-nowrap">LOGO</span>
      <div>
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-subHeading text-lg font-semibold leading-6 text-textPrimary hover:text-accentHover"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="font-subHeading bg-transparent hover:bg-buttonHover text-button font-semibold hover:text-white py-2 px-4 border border-button hover:border-transparent rounded">
          Log in
        </button>
        <button
          className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Register
        </button>
      </div>
      {isModalOpen && <SignupModal isOpen={isModalOpen} onClose={closeModal} />}
    </nav>
  );
}
