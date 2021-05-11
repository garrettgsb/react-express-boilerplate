import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VegetableCard from './VegetableCard'

export default function Vegetables() {
  const[veg, setVeg] = useState([]);

  const url = '/api/vegetables'

  useEffect(() => {
    getAllVeg();
  }, []);

  const renderVegetableCard = (veg) =>{
    const data = veg.map(element => {
      return (
        <VegetableCard
        {...element}
        /> 
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
    
    <div>{renderVegetableCard(veg)}</div>
    
  )
}