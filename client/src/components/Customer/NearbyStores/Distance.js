import { useState } from 'react'
import { Select, MenuItem } from '@material-ui/core';

function Distance() {
  const [distance, setDistance] = useState(10)

  const handleChange = (event) => {
    setDistance(event.target.value)
  }


  return(
    <Select
      value={distance}
      onChange={handleChange}
    >
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={30}>30</MenuItem>
    <MenuItem value={50}>50</MenuItem>
    <MenuItem value={100}>100</MenuItem>

    </Select>
  )
}

export default Distance