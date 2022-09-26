import React from "react";
import Image from "react-bootstrap/Image";
import "./Banner.scss";

const Banner = () => {
  return (
    <Image
      className="banner"
      fluid
      src="https://www.nichiha.com/uploads/7-Modern-Homes-Using-Wall-Paneling-Right/Nichiha-ArchitecturalBlock-Modern.jpg?t=1629137943"
      alt="banner"
    />
  );
};

export default Banner;
