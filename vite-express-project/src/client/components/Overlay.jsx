import React from "react";

const Overlay = ({ isOpen, onClick }) => {
  return isOpen ? (
    <div
      className="fixed inset-0 bg-black opacity-50"
      onClick={onClick}
    ></div>
  ) : null;
};

export default Overlay;
