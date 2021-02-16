import { useState } from 'react'

import { Switch } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';



export default function BeanSlider() {

  const [sliderValue, setSliderValue] = useState(0)
  const userBeans = 250;

  const handleChange = ((event, newValue) => {
    setSliderValue(newValue)
  })

  // get user beans
  return(
    <Slider 
    value={sliderValue}
    max={userBeans}
    onChange={handleChange}
    valueLabelDisplay="auto"
    />
  )




}