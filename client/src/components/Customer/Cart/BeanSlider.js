import { useState } from 'react'

import Slider from '@material-ui/core/Slider';



export default function BeanSlider(props) {
  
  const [sliderView, setSliderView] = useState(0)
  const [sliderValue, setSliderValue] = useState(0)

  
  const userBeans = 250;
  const handleChange = ((event, newValue) => {
    setSliderView(newValue)
  })

  const handleChangeCommitted = ((event, newValue) => {
    if (newValue > sliderValue) {
      props.removeFromTotal(newValue - sliderValue)
    } else if (newValue < sliderValue) {
      props.addToTotal(sliderValue - newValue)
    }
    setSliderValue(newValue)
  })

 

  // get user beans
  return(
    <Slider 
    value={sliderView}
    min={0}
    max={userBeans}
    onChange={handleChange}
    onChangeCommitted={handleChangeCommitted}
    valueLabelDisplay="auto"
    />
  )




}