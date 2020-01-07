import React, { Fragment } from "react";
import styled from 'styled-components';


type DestRecProps = { city: string, topRecommended: string };

const Destination = styled.h3`
  display: block;
  text-align: center;
  // color: #ffffff;
`;
const Image = styled.img`
  width: 90%;
  height: 150px;
  background-size: 100%;
  display: grid;
  margin: 0px auto;
`;
export const DestRec: React.FC<DestRecProps> = () => {  
    return (
      <Fragment>
        <Destination>Vancouver<Image src="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg"/></Destination>
        <Destination>Seattle<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg"/></Destination>
      </Fragment>
    )
}