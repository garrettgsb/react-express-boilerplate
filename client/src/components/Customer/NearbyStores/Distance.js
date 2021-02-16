import { useState } from 'react'
import { Select, MenuItem } from '@material-ui/core';

export default function Distance(props) {
  const [distance, setDistance] = useState(10)

  const handleChange = (event) => {
    //this is the setDistance() for getting nearby stores
    props.setDistance(event.target.value)
    setDistance(event.target.value)
  }

  return(
    <Select
      value={distance}
      onChange={handleChange}
    >
    <MenuItem value={5}>5 km</MenuItem>
    <MenuItem value={10}>10 km</MenuItem>
    <MenuItem value={20}>20 km</MenuItem>
    <MenuItem value={30}>30 km</MenuItem>
    {/* <MenuItem value={50}>50 km</MenuItem>
    <MenuItem value={100}>100 km</MenuItem> */}
    </Select>
  )
}