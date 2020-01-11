import React, { Fragment } from "react";
import styled from 'styled-components';


type DestRecProps = { 
  cityName: string,
  topRecommended: string ,
  selected?: string | null,
  search?: any
  // children: ReactNode
};

const Destination = styled.h3`
  display: block;
  text-align: center;
  // color: #ffffff;
`;
const Image = styled.img`
  width: 90%;
  height: 150px;
  background-size: 100%;
  border-radius: 15px;
  display: grid;
  margin: 0px auto;
`;
export const DestRec: React.FC<DestRecProps> = () => {  
    return (
      <Fragment>
        <Destination>Vancouver<Image src="https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg"/></Destination>
        <Destination>Tokyo<Image src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></Destination>
        <Destination>Seattle<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg"/></Destination>
        <Destination>London<Image src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></Destination>
      </Fragment>
    )
}