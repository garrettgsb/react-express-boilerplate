import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import VegetableAbout from './VegetableAbout';
import Grid from "@material-ui/core/Grid";
import useAppData from "hooks/useAppData";

export default function VegetableFlipCard() {
  const { state } = useAppData();

  const renderVegetableFlipCard = () => {
    const data = state.vegetables.map(element => {
      return (
        <Grid item md={4}>
          <VegetableAbout {...element} />
        </Grid>
      )
    })
    return data;
  }

  return (
    <Grid container spacing={16}>{renderVegetableFlipCard()}
    </Grid>
  )
};