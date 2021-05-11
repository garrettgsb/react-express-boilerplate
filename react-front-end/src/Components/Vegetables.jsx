import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VegetableCard from './VegetableCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";


export default function Vegetables() {
  const[veg, setVeg] = useState([]);

  const url = '/api/vegetables'
  
  const useStyles = makeStyles({
    row: {
     display: "flex"
    },
  
  });

  const classes = useStyles();
  useEffect(() => {
    getAllVeg();
  }, []);

  const renderVegetableCard = (veg) =>{
    const data = veg.map(element => {
      return (
        <Grid item md={4}>
        <VegetableCard
         {...element}
        />
        </Grid>
      )
    }) 
    return data
  }

  const getAllVeg = () => {
    axios.get (url)
    .then ((res) =>{
      const allVeg = res.data;
      console.log('1', allVeg)
      //add data to state
      setVeg(allVeg)
      console.log('vegetables',res.data)
    })
    .catch(error => console.error(`Error: ${error}`))
  }

  return (
    
    <Grid container spacing={24}>{renderVegetableCard(veg)}
    </Grid>
    
  )
};