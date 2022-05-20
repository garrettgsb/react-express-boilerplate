import React from "react"
import "./Stamp.scss"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

export default function Stamp() {
  return (
    <div className="stamp">
      <div className="stamp--image">image</div>
      <div className="stamp--name">name</div>
      <div className="stamp--icon">
          <MapOutlinedIcon >
          </MapOutlinedIcon>
        </div>
    </div>
  )
  
}