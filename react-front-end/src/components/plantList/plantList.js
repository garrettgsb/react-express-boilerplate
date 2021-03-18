import React from 'react';
import styled from "styled-components";

import PlantListItem from "./plantListItem";

const Styles = styled.div`
  .card {
    font-family: "Montserrat", Helvetica, sans-serif;
    border-radius: 15px;

    img {
      height: 175px;
      width: 175px;
      border-radius: 100%;
      margin: 15px auto 5px auto;
    }

    i {
      color: #3B715A;
    }
  }
`;

export default function plantList(props) {
  return (
    <Styles>
      <div class="row my-4 mx-4 justify-content-center">
        <PlantListItem
          nickname="Fernando"
          name="Aloe Vera"
          difficulty="easy"
          water="10-14"
          sun="full sun"
          temp="18-24"
        ></PlantListItem>
      </div>
    </Styles>
  );
}